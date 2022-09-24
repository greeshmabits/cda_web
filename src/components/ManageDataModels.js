import { useNavigate } from 'react-router-dom'
import React from 'react';
import {Button,Table} from "antd";
import {EditTwoTone,DeleteTwoTone} from '@ant-design/icons'
import useFetch from './util/useFetch';


export const ManageDataModels = () => {
	const navigate = useNavigate()
	const {data,loading,error}=useFetch("http://52.66.217.199:9080/models/");

	if (loading) return <h1>Loading...</h1>;

	if (error) console.log(error);

	const columns =[
		{
			key:'1',
			title: 'Model Name',
			dataIndex : 'modelname',
			sorter : (record1, record2) => {
				return record1.modelname > record2.modelname
			}
		},
		{
			key:'2',
			title: 'Type',
			dataIndex : 'type',
			sorter : (record1, record2) => {
				return record1.type > record2.type
			}
		},
		{
			key:'3',
			title: 'Actions',
			render : (record) => {
				return <>
				<EditTwoTone />
				<DeleteTwoTone style={{color : "red", marginLeft : 12}} />
				</>
			}
		},
	]
	return (
	  <form className='manageDataModel-container'>
		<h1>ManageDataModels</h1>
		<br></br>
		<Button size='large' type='primary' align='center'>Add a new model</Button>
		<br></br>
		<Table columns={columns} dataSource={data}></Table>
	  </form>
	)
  }