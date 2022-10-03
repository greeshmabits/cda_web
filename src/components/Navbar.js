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
      <NavLink to='/' style={navLinkStyles}>
        HomePage
      </NavLink>
      <NavLink to='/analyzeData' style={navLinkStyles}>
        AnalyzeData
      </NavLink>
      <NavLink to='/analyzeHistory' style={navLinkStyles}>
        AnalyzeHistory
      </NavLink>
      <NavLink to='/manageDataModels' style={navLinkStyles}>
        ManageDataModels
      </NavLink>
      <NavLink to='/manageUsers' style={navLinkStyles}>
        ManageUsers
      </NavLink>
      {auth.user && (
        <NavLink to='/loginForm' style={navLinkStyles} onClick={handleLogout}>
          Logout
        </NavLink>
      )}
    </nav>
  )
}
