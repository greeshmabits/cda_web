import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, WelcomePage } from './components/WelcomePage'
import LoginForm from './components/LoginForm';
import { Navbar } from './components/Navbar'
import { AnalyzeData } from './components/AnalyzeData'
import { AnalyzeHistory } from './components/AnalyzeHistory'
import { ManageDataModels } from './components/ManageDataModels'
import { ManageUsers } from './components/ManageUsers'
import { NoMatch } from './components/NoMatch'
import AddUser from './components/user/AddUser';
import { EditUser } from './components/user/EditUser';
import 'antd/dist/antd.min.css';
import { AnalysisReport } from './components/result/AnalysisReport';
import AddModel from './components/model/AddModel';
import { EditModel } from './components/model/EditModel';
import {AuthProvider} from './components/util/auth';
import { RequireAuth } from './components/util/RequireAuth';
import { RequireAdminAuth } from './components/util/RequireAdminAuth';
import { PermissionDenied } from './components/user/PermissionDenied';



function App() {

  const [showNav, setShowNav] = useState(true);
 
  return (
    <div className="App">
      <>
      <AuthProvider>
      {   showNav &&
          <nav>
            <Navbar />
          </nav>
   } 
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<RequireAuth ><WelcomePage funcNav={setShowNav}/></RequireAuth>} />
        <Route path='/analyzeData' element={<RequireAuth><AnalyzeData funcNav={setShowNav}/></RequireAuth>} />
        <Route path='/analyzeData/result/:id' element={<RequireAuth><AnalysisReport funcNav={setShowNav}/></RequireAuth>} />
        <Route path='/analyzeHistory' element={<RequireAuth><AnalyzeHistory funcNav={setShowNav}/></RequireAuth>} />
        <Route path='/manageDataModels' element={<RequireAdminAuth><ManageDataModels funcNav={setShowNav}/></RequireAdminAuth>} />
        <Route path='/model/add' element={<RequireAdminAuth><AddModel funcNav={setShowNav}/></RequireAdminAuth>} />
        <Route path='/model/edit/:modelname' element={<RequireAdminAuth><EditModel funcNav={setShowNav}/></RequireAdminAuth>} /> 
        <Route path='/manageUsers' element={<RequireAdminAuth><ManageUsers funcNav={setShowNav}/></RequireAdminAuth>} />
        <Route path='/user/add' element={<RequireAdminAuth><AddUser funcNav={setShowNav}/></RequireAdminAuth>} />
        <Route path='/user/edit/:username' element={<RequireAdminAuth><EditUser funcNav={setShowNav}/></RequireAdminAuth>} />        
        <Route path='/loginForm' element={<LoginForm funcNav={setShowNav}/>} />
        <Route path='/denied' element={<PermissionDenied funcNav={setShowNav}/>} />
        <Route path='*' element={<NoMatch funcNav={setShowNav} />} />
      </Routes>
      </AuthProvider>
      </>
      {/* )
    : ( */}
      {/* <LoginForm Login={Login} error={error} /> */}
    {/* ) } */}
    </div>
  )
}

export default App
