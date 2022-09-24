import { useNavigate } from 'react-router-dom'
import React,{useState} from 'react';
import {Button,Table} from "antd";
import {EditTwoTone,DeleteTwoTone} from '@ant-design/icons'
import useFetch from './util/useFetch';


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
			title: 'Actions',
			render : (_,record) => {
				return <>
				<EditTwoTone />
				<DeleteTwoTone style={{color : "red", marginLeft : 12}} />
				</>
			}
		},
	]

	return (
	  <form>
		<h1>ManageUsers</h1>
		<br></br>
		<Button size='large' type='primary' align='center' >Add a new user</Button>
		<br></br>
		<Table columns={columns} dataSource={data}></Table>
	  </form>
	)
  }

