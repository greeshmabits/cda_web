import { useNavigate,Outlet } from 'react-router-dom'
import React from 'react';
import { useAuth } from './util/auth';
import { NavbarGeneral,NavbarAdmin } from './Navbar'

export const WelcomePage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <>      {auth.role===0 && (
      <div>
       < NavbarAdmin/>
      </div>
    )}
    {auth.role===1 && (
      <div>
       < NavbarGeneral/>
      </div>
    )}      
    <Outlet />

    </>
  )
}

