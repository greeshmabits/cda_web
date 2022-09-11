import React from 'react';
import {FaBars , FaTimes} from "react-icons/fa";
import AnalyzeHistory from '../AnalyzeHistory';
import AnalyzeData from '../AnalyzeData';
import ManageDataModels from '../ManageDataModels';
import ManageUsers from '../ManageUsers';


function Navbar() {
  return (
    <header>
        <h3 className="logo">Logo</h3>
        <nav className="navbar">
            <a href='/AnalyzeData'>AnalyzeData</a>
            <a href='/AnalyzeHistory'>AnalyzeHistory</a>
            <a href='/ManageDataModels'>ManageDataModels</a>
            <a href='/ManageUsers'>ManageUsers</a>
            <button type='close'>
                <FaTimes/>
            </button>
            <button>
            <FaBars/>
            </button>
    </nav>
    </header> 
  )
}

export default Navbar