import { useNavigate } from 'react-router-dom'
import React from 'react';
import * as ReactBootStrap from "react-bootstrap"


export const ManageDataModels = () => {
	const navigate = useNavigate()
	const models=[
		{name:"PCA-Model-1",type:"PCA"},
		{name:"PCA-Model-2",type:"PCA"},
		{name:"TRA-Model-1",type:"TRA"},
	]

	const renderModel = (models,index) => {
		return (
			<tr key={index}>
			<td>{models.name}</td>
			<td>{models.type}</td>
			</tr>
		)
	}
	return (
	  <form className='manageDataModel-container'>
		<h1>ManageDataModels</h1>
		<ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>ModelName</th>
          <th>Type</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
		{models.map(renderModel)}
      </tbody>
    </ReactBootStrap.Table>
	<div className='buttons'>
		<button name='add'>Add</button>
		<button name='edit'>Edit</button>
		<button name='delete'>Delete</button>
	</div>
	  </form>
	)
  }