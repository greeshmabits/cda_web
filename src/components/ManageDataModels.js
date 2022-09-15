import { useNavigate } from 'react-router-dom'
import React from 'react';

export const ManageDataModels = () => {
	const navigate = useNavigate()
	return (
	  <>
		<div>ManageDataModels</div>
		{/* <button onClick={() => navigate('order-summary')}>Place order</button> */}
	  </>
	)
  }