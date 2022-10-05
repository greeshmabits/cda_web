import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, WelcomePage } from './components/WelcomePage'
import {HomePage} from './components/HomePage'
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

 
  return (
    <div className="App">
      <>
      <AuthProvider>
      <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/loggedin' element={<RequireAuth><WelcomePage/></RequireAuth>} >
              <Route path='/loggedin' element={<RequireAuth><HomePage/></RequireAuth>} />
              <Route path='/loggedin/analyzeData' element={<RequireAuth><AnalyzeData /></RequireAuth>} />
              <Route path='/loggedin/result/:id' element={<RequireAuth><AnalysisReport /></RequireAuth>} />
              <Route path='/loggedin/analyzeHistory' element={<RequireAuth><AnalyzeHistory /></RequireAuth>} />
              <Route path='/loggedin/manageDataModels' element={<RequireAdminAuth><ManageDataModels /></RequireAdminAuth>} ></Route>
              <Route path='/loggedin/manageDataModels/add' element={<RequireAdminAuth><AddModel/></RequireAdminAuth>} />
              <Route path='/loggedin/manageDataModels/edit/:modelname' element={<RequireAdminAuth><EditModel /></RequireAdminAuth>} /> 
              <Route path='/loggedin/manageUsers' element={<RequireAdminAuth><ManageUsers /></RequireAdminAuth>} />
              <Route path='/loggedin/manageUsers/user/add' element={<RequireAdminAuth><AddUser /></RequireAdminAuth>} />
              <Route path='/loggedin/manageUsers/user/edit/:username' element={<RequireAdminAuth><EditUser /></RequireAdminAuth>} />
              
        </Route>        
        
        <Route path='/denied' element={<PermissionDenied />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      </AuthProvider>
      </>
    </div>
  )
}

export default App
