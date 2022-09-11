import React, {useState} from 'react';

function LoginForm({Login , error}) {
    const [details,setDetails] = useState({username:"",password:""});


    const submitHandler = e => {
        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Chemometrics Data Analyzer</h2>
            <div>{(error != "") ? (<div className="error">{error}</div> ) : "" }</div>
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password : e.target.value})} value={details.password}/>
            </div>
            <div className="form-buttons">
            <input type="submit" value="Login"/>
            {/* <input type="button" value="Reset" />   */}
            </div>
        </div>
    </form>
  );
}

export default LoginForm