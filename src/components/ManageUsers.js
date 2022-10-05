import { useNavigate } from 'react-router-dom'
import React,{useState,useEffect,useReducer} from 'react';
import {Button,Popconfirm,Table} from "antd";
import {EditTwoTone,DeleteTwoTone} from '@ant-design/icons';
import axios from 'axios';
import { getUserTypeName } from './util/common';
import {single_user_url,all_users_url} from './config/configuration'

export const ManageUsers = () => {
	const navigate = useNavigate();
	const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
	const [reducer,forceUpdate] = useReducer(x=>x+1,0);

    useEffect( () => {
        setLoading(true);
         axios.get(all_users_url)
             .then((response) => {
                setData(response.data);
             })
             .catch((err) => {
                setError(err);
             })
             .finally(() => {
                setLoading(false);
             });
    }, [reducer]);
	
	if (loading) return <h1>Loading...</h1>;

	if (error) console.log(error);

	const columns =[
		{
			key:'1',
			title: 'Username',
			dataIndex : 'username',
			sorter : (record1, record2) => {
				return record1.username > record2.username
			}
		},
		{
			key:'2',
			title: 'Email',
			dataIndex : 'email',
			
		},
		{
			key:'3',
			title: 'Role',
			dataIndex : 'usertype',
			 render : (text) => {
				return getUserTypeName(text)
			}
			
		},
		{
			key:'4',
			title: 'Actions',
			render : (_,record) => {
				return <>
				<EditTwoTone size={'large'} onClick={(e) =>{editUser(record.username,e)}}/>
				<Popconfirm title ="Click Ok to confirm deletion ?" onConfirm={(e) => deleteUser(record.username,e)}>
				<DeleteTwoTone size={'large'}/>
				</Popconfirm>
				</>
			}
		},
	]

	const editUser = (username,e) => {
		e.preventDefault();
		navigate(`/loggedin/manageUsers/user/edit/${username}`, {replace: true});

	}

	const deleteUser =  async (userNameToDelete,e) =>{
		try {
			e.preventDefault();
			const response = await axios.delete(`${single_user_url}${userNameToDelete}`);
			if (response.status==200){
				console.log('Deleting user ',response);
				forceUpdate();
				alert("Deleted user "+userNameToDelete+" successfully!"); 
			}
			else
			alert ("User not deleted.Please try again!");
		}
		
		catch(error) {
			console.log(error);
			alert("Error processing request.Please try again!");
		}

	}

	const navigateToAddUser = () => {
		navigate('/loggedin/manageUsers/user/add', {replace: true});
	}


	return (
	  <>
		<h1>ManageUsers</h1>
		<br></br>
		<Button size='large' type='primary' align='center' onClick={navigateToAddUser}>Add a new user</Button>
		<br></br>
		<Table columns={columns} dataSource={data}></Table>
	  </>
	)
  }

