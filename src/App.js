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



function App() {

  // const adminUser = {
  //   username : "admin",
  //   password: "admin",
  // }
  // const [user,setUser] = useState({username:"",});
  // const [error,setError] = useState("");

  // const Login = details => {
  //   console.log(details);

  //   if (details.username == adminUser.username && details.password == adminUser.password){
  //     console.log("Logged in successfully");
  //     setUser({
  //       username : details.username,
  //     });
  //   }
  //   else {
  //     console.log("Login credentials are wrong!");
  //     setError("Details do not match!");
  //   }

  // }

  // const Logout = () => {
  //   setUser({username:"",});
  //   console.log("Logout");
  // }
  return (
    <div className="App">
    {/* {(user.username != "") ? ( */}
      <>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<RequireAuth><WelcomePage/></RequireAuth>} />
        <Route path='/analyzeData' element={<RequireAuth><AnalyzeData /></RequireAuth>} />
        <Route path='/analyzeData/result/:id' element={<RequireAuth><AnalysisReport /></RequireAuth>} />
        <Route path='/analyzeHistory' element={<RequireAuth><AnalyzeHistory /></RequireAuth>} />
        <Route path='/manageDataModels' element={<RequireAuth><ManageDataModels /></RequireAuth>} />
        <Route path='/model/add' element={<RequireAuth><AddModel /></RequireAuth>} />
        <Route path='/model/edit/:modelname' element={<RequireAuth><EditModel /></RequireAuth>} /> 
        <Route path='/manageUsers' element={<RequireAuth><ManageUsers /></RequireAuth>} />
        <Route path='/user/add' element={<RequireAuth><AddUser /></RequireAuth>} />
        <Route path='/user/edit/:username' element={<RequireAuth><EditUser /></RequireAuth>} />        
        <Route path='/loginForm' element={<LoginForm />} />
        <Route path='*' element={<NoMatch />} />
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
