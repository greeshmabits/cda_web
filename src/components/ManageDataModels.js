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
	return (
	  <>
		<div>ManageDataModels</div>
		{/* <button onClick={() => navigate('order-summary')}>Place order</button> */}
	  </>
	)
  }