import { NavLink } from 'react-router-dom'
// import { useAuth } from './auth'

export const Navbar = () => {
  // const auth = useAuth()
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className='primary-nav'>
      <NavLink to='/' style={navLinkStyles}>
        WelcomePage
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
      {/* <NavLink to='/products' style={navLinkStyles}>
        AnalyzeHistory
      </NavLink>
      <NavLink to='/profile' style={navLinkStyles}>
        ManageDataModels
      </NavLink> */}
      {/* {!auth.user && ( */}
        {/* <NavLink to='/login' style={navLinkStyles}>
          ManageUsers
        </NavLink> */}
      {/* )} */}
    </nav>
  )
}
