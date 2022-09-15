import { useNavigate } from 'react-router-dom'
import React from 'react';

export const ManageUsers = () => {
	const navigate = useNavigate()
	return (
	  <>
		<div>ManageUsers</div>
		{/* <button onClick={() => navigate('order-summary')}>Place order</button> */}
	  </>
	)
  }

