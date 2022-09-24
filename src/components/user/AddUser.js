import React ,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import axios from 'axios';

const AddUser = () => {
    const navigate = useNavigate()
    const [details,setDetails] = useState({username:"",firstname:"",lastname: "",usertype:"",email:"",password:""});

    const submitHandler = (e) => {
		e.preventDefault();
		axios.post('http://52.66.217.199:9080/users/', details).then(res => console.log('Posting data',res)).catch(err => console.log(err));
        navigate("/manageUsers");
	}

    const navigateToManageUsers = () => {
		navigate('/manageUsers');
	}

  return (
    <div>
        <h1>Add User</h1>
        <form>
        <div className='form-inner'>
            <h2>Enter the details to add user</h2>
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
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
                <input type="text" name="usertype" id="usertype" onChange={e => setDetails({...details, usertype: e.target.value})} value={details.usertype}/>
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
            <Button size='large' type='primary' align='center' margin-right='10px' onClick={submitHandler}>Add a new user</Button>
            <Button size='large' align='center' margin-right='10px' margin-left='10px' onClick={navigateToManageUsers}>Cancel</Button>
            </div>
        </div>
    </form>
        </div>
  )
}

export default AddUser
