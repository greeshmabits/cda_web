import { useNavigate } from 'react-router-dom'
import React,{useState,useEffect,useReducer} from 'react';
import {Button,Table,Popconfirm} from "antd";
import {EditTwoTone,DeleteTwoTone} from '@ant-design/icons';
import axios from 'axios';
import { getModelTypeName } from './util/common';
import {single_model_url,all_models_url} from './config/configuration';


export const ManageDataModels = () => {
	const navigate = useNavigate();
	const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
	const [reducer,forceUpdate] = useReducer(x=>x+1,0);

    useEffect( () => {
        setLoading(true);
         axios.get(all_models_url)
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

	const deleteModel = async (modelnameToDelete,e) =>{
		try {
			e.preventDefault();
			const res= await axios.delete(`${single_model_url}${modelnameToDelete}`);
			if (res.status==200) {
				console.log('Deleting model ',res); 
				forceUpdate();
				alert("Deleted model "+modelnameToDelete+" successfully!"); 
				}
			else {
				alert("Model not deleted.Please try again!");
				}
		}
			
		catch(error) {
			console.log(error);
			alert("Model not deleted.Please try again!");
		}

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