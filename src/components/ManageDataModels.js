import { useNavigate } from 'react-router-dom'
import React,{useState} from 'react';
import {Button,Table,Popconfirm} from "antd";
import {EditTwoTone,DeleteTwoTone} from '@ant-design/icons'
import useFetch from './util/useFetch';
import axios from 'axios';
import { getModelTypeName } from './util/common';


export const ManageDataModels = () => {
	const navigate = useNavigate()
	const {data,loading,error}=useFetch("http://52.66.217.199:9080/models/");
	const [value,setValue] = useState();

	if (loading) return <h1>Loading...</h1>;

	if (error) console.log(error);

	const refresh = ()=>{
		setValue({});
	}
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
			},
			render : (text) => {
				return getModelTypeName(text)
			}
		},
		{
			key:'3',
			title: 'Actions',
			render : (record) => {
				return <>
				<EditTwoTone size={'large'} onClick={(e) =>{editModel(record.modelname,e)}}/>
				<Popconfirm title ="Click Ok to confirm deletion ?" onConfirm={(e) => deleteModel(record.modelname,e)}>
				<DeleteTwoTone size={'large'} style={{color : "red", marginLeft : 12}} />
				</Popconfirm>
				</>
			}
		},
	]

	const editModel = (modelname,e) => {
		e.preventDefault();
		navigate(`/loggedin/manageDataModels/edit/${modelname}`, {replace: true});

	}

	const deleteModel = (modelnameToDelete,e) =>{
		e.preventDefault();
		axios.delete(`http://52.66.217.199:9080/model/${modelnameToDelete}`).then((res) => {console.log('Deleting model ',res); if (res.status == 200) alert("Deleted model "+modelnameToDelete+" successfully!"); else alert("Model not deleted.Please try again!");}).catch(err => console.log(err))
		// navigate('/loggedin/manageDataModels');
		refresh();
	}

	const navigateToAddModel = () => {
		navigate('/loggedin/manageDataModels/add', {replace: true});
	}

	return (
	  <form className='manageDataModel-container'>
		<h1>ManageDataModels</h1>
		<br></br>
		<Button size='large' type='primary' align='center'  onClick={navigateToAddModel}>Add a new model</Button>
		<br></br>
		<Table columns={columns} dataSource={data}></Table>
	  </form>
	)
  }