import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export const RequireAdminAuth = ({ children }) => {
  const location = useLocation()
  const auth = useAuth()
  console.log(auth.user)
  console.log(auth.role)
  if (!auth.user) {
    return <Navigate to='/' state={{ path: location.pathname }} />
  }
  else {
    if (auth.role == 0)
    return children
    else
    return <Navigate to='/denied' state={{ path: location.pathname }} />
    
  }
}
