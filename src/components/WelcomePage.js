import { useNavigate } from 'react-router-dom'

export const WelcomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary')}>Place order</button>
    </>
  )
}

