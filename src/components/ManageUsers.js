import { useNavigate } from 'react-router-dom'
import React from 'react';
import * as ReactBootStrap from "react-bootstrap"

export const ManageUsers = () => {
	const navigate = useNavigate()
	const users=[
		{name:"User-1"},
		{name:"User-2"},
		{name:"User-3"},
	]

	const renderUser = (users,index) => {
		return (
			<tr key={index}>
			<td>{users.name}</td>
			</tr>
		)
	}
	return (
	  <>
		<h1>ManageUsers</h1>
		<ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
		{users.map(renderUser)}
      </tbody>
    </ReactBootStrap.Table>
	  </>
	)
  }

