import { NavLink,useNavigate } from 'react-router-dom'
import React from 'react';
import { useAuth } from './util/auth';

export const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/loginForm');
  }

  return (
    <nav className='primary-nav'>
{/* 
      {!auth.user && (
        <NavLink to='/loginForm' style={navLinkStyles}>
          Login
        </NavLink>
      )} */}
      <NavLink to='/loggedin' style={navLinkStyles}>
        HomePage
      </NavLink>
      <NavLink to='/loggedin/analyzeData' style={navLinkStyles}>
        AnalyzeData
      </NavLink>
      <NavLink to='/loggedin/analyzeHistory' style={navLinkStyles}>
        AnalyzeHistory
      </NavLink>
      <NavLink to='/loggedin/manageDataModels' style={navLinkStyles}>
        ManageDataModels
      </NavLink>
      <NavLink to='/loggedin/manageUsers' style={navLinkStyles}>
        ManageUsers
      </NavLink>
      {auth.user && (
        <NavLink to='/' style={navLinkStyles} onClick={handleLogout}>
          Logout
        </NavLink>
      )}
    </nav>
  )
}
