import { useNavigate } from 'react-router-dom'
import React from 'react';

export const WelcomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Home Page</h1>
      <div>Welcome User,</div>
    </>
  )
}

