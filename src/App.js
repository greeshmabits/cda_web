import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, WelcomePage } from './components/WelcomePage'
// import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { AnalyzeData } from './components/AnalyzeData'
import { AnalyzeHistory } from './components/AnalyzeHistory'
import { ManageDataModels } from './components/ManageDataModels'
import { ManageUsers } from './components/ManageUsers'
import { NoMatch } from './components/NoMatch'
// import { AuthProvider } from './components/auth'
// import { RequireAuth } from './components/RequireAuth'

// const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/analyzeData' element={<AnalyzeData />} />
        <Route path='/analyzeHistory' element={<AnalyzeHistory />} />
        <Route path='/manageDataModels' element={<ManageDataModels />} />
        <Route path='/manageUsers' element={<ManageUsers />} />
        <Route path='*' element={<NoMatch />} />
        {/* <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        /> */}
        {/* <Route
          path='about'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        /> */}
        {/* <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route path='*' element={<NoMatch />} /> */}
      </Routes>
    </>
  )
}

export default App
