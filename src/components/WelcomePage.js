import { useNavigate } from 'react-router-dom'
import React from 'react';

export const WelcomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary')}>Place order</button>
    </>
  )
}

