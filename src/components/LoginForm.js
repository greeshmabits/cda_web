import axios from 'axios';
import React, {useState,useRef,useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './util/auth';


function LoginForm() {
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()
    const userRef = useRef();
    const errRef = useRef();

    const [data,setData]=useState(null);
    const [loading,setLoading] = useState(false);
    const [details,setDetails] = useState({username:"",password:""});
    const [errMsg, setErrMsg] = useState('');

    
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [details.username, details.password])

    const redirectPath = location.state?.path || '/'

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await  axios.get(`http://52.66.217.199:9080/user/${details.username}`)
            .then((response) => {
               setData(response.data);
            });
            const password = data?.password;
            const roles = data?.usertype;
            if (details.password == password) {
                auth.login(details.username,roles);
                navigate(redirectPath, { replace: true });
            }
            else {
                setErrMsg('Login Failed.Wrong Password!');
            }

        }
        catch(err)  {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
        finally  {
            setLoading(false);
        }

    } 


    const handleReset= e => {
        setDetails({username:"",password:""});
    }

  return (
    <>   

    <form onSubmit={handleLogin}>
        <div className='form-inner'>
            <h2>Chemometrics Data Analyzer</h2>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <br></br>
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" name="username" id="username" ref={userRef} autoComplete="off" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password : e.target.value})} value={details.password} required/>
            </div>
            <div className="form-buttons">
            <input type="submit" value="Login"/>
            <input type="reset" value="Reset" onClick={handleReset} />  
            </div>
        </div>
    </form>
    </>
  );
}

export default LoginForm