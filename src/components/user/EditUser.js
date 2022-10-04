import React ,{useEffect, useState} from 'react';
import {useNavigate,useParams} from "react-router-dom";
import {Button} from "antd";
import axios from 'axios';


export const EditUser = () => {
    const navigate = useNavigate();
    const {username} = useParams();
    console.log(username);

    const [details,setDetails] = useState({username:"",firstname:"",lastname: "",usertype:"",email:"",password:""});

    const submitHandler = (e) => {
		e.preventDefault();
		axios.put(`http://52.66.217.199:9080/user/${username}`, details).then(res => console.log('Editing data',res)).catch(err => console.log(err));
        navigate("/manageUsers");
	}

    const navigateToManageUsers = () => {
		navigate('/manageUsers');
	}

    useEffect(() => {
        loadDetails();
    },[]);

    const loadDetails= async () => {
        const result= await axios.get(`http://52.66.217.199:9080/user/${username}`);
        setDetails(result.data);
    }
  return (
    <div>
        <h1>Edit User</h1>
        <form>
        <div className='form-inner'>
            <h2>Make changes to the existing user details</h2>
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" name="username" id="username" disabled="true" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
            </div>
            <div className="form-group">
                <label htmlFor="name">First Name:</label>
                <input type="text" name="firstname" id="firstname" onChange={e => setDetails({...details, firstname: e.target.value})} value={details.firstname}/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Last Name:</label>
                <input type="text" name="lastname" id="lastname" onChange={e => setDetails({...details, lastname: e.target.value})} value={details.lastname}/>
            </div>
            <div className="form-group">
                <label htmlFor="name">User Type:</label>
                <select onChange={e => setDetails({...details, usertype: e.target.value})} value={details.usertype}>
				            <option>----------Select User Type----------</option>
                    <option id='admin' value='0'>Admin</option>
                    <option id='general' value='1'>General</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password : e.target.value})} value={details.password}/>
            </div>
            <div className="form-buttons">
            <Button size='large' type='primary' align='center' margin-right='10px' onClick={submitHandler}>Update User</Button>
            <Button size='large' align='center' margin-right='10px' margin-left='10px' onClick={navigateToManageUsers}>Cancel</Button>
            </div>
        </div>
    </form></div>
  )
}
