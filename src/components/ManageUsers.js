import { useNavigate } from 'react-router-dom'
import React,{useReducer} from 'react';
import {Button,Popconfirm,Table} from "antd";
import {EditTwoTone,DeleteTwoTone} from '@ant-design/icons'
import useFetch from './util/useFetch';
import axios from 'axios';
import { getUserTypeName } from './util/common';


export const ManageUsers = () => {
	const navigate = useNavigate()
	const {data,loading,error}=useFetch("http://52.66.217.199:9080/users/");
	
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
		navigate(`/user/edit/${username}`, {replace: true});

	}

	const deleteUser = (userNameToDelete,e) =>{
		e.preventDefault();
		axios.delete(`http://52.66.217.199:9080/user/${userNameToDelete}`).then((res) => {console.log('Deleting user ',res); if (res.status == 200) alert("Deleted user "+userNameToDelete+" successfully!"); else alert("User not deleted.Please try again!");}).catch(err => console.log(err))
		
	}

	const navigateToAddUser = () => {
		navigate('/user/add', {replace: true});
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

