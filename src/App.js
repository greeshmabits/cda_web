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



function App() {

  const adminUser = {
    username : "admin",
    password: "admin",
  }
  const [user,setUser] = useState({username:"",});
  const [error,setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.username == adminUser.username && details.password == adminUser.password){
      console.log("Logged in successfully");
      setUser({
        username : details.username,
      });
    }
    else {
      console.log("Login credentials are wrong!");
      setError("Details do not match!");
    }

  }

  const Logout = () => {
    setUser({username:"",});
    console.log("Logout");
  }
  return (
    <div className="App">
    {(user.username != "") ? (
      <>
      <Navbar />
      <Routes>
        <Route path='/' element={<WelcomePage username={user.username}/>} />
        <Route path='/analyzeData' element={<AnalyzeData />} />
        <Route path='/analyzeData/result/:id' element={<AnalysisReport />} />
        <Route path='/analyzeHistory' element={<AnalyzeHistory />} />
        <Route path='/manageDataModels' element={<ManageDataModels />} />
        <Route path='/manageUsers' element={<ManageUsers />} />
        <Route path='/user/add' element={<AddUser />} />
        <Route path='/user/edit/:username' element={<EditUser />} />        
        <Route path='/loginForm' element={<LoginForm />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      </>)
    : (
      <LoginForm Login={Login} error={error} />
    ) }
    </div>
  )
}

export default App
