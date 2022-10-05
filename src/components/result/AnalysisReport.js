import React, { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom'
import {Button} from "antd";
import axios from 'axios';

export const AnalysisReport = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [details,setDetails] = useState({id:"",samplefile:"",result: "",updatetime:"",modelname:""});
    const [jsonResult,setJsonResult]=useState({});
    // const [resultDetails,setResultDetails] = useState({modeltype:"",modelname:"",datacount:"",setcomponent:"",maxcomponent:"",resultid:"",result0:""});
    console.log("Recieved id is : "+id)

    useEffect(() => {
        loadDetails();
        // mapJsonData();
    },[]);  

    const loadDetails= async () => {
        const result= await axios.get(`http://52.66.217.199:9080/run/${id}`);
        
        console.log("Result are as follows : "+result.data);
        setDetails(result.data);
        console.log("Details set are "+details);
    }

    const navigateToAnalyzisData = () => {
		// navigate('/loggedin/analyzeData');
        navigate(-1);
	}

    const mapJsonData = ()=>{
        setJsonResult(details.result);
        console.log("jsonresult before parsing--->"+jsonResult);
        const jsonObj=JSON.parse(jsonResult);
        console.log("JsonResult after parsing is --->"+jsonObj)
        // setResultDetails({...resultDetails,modeltype:jsonObj["Model Type"],modelname:jsonObj["Model Name"],datacount:jsonObj["Data Count"],setcomponent:jsonObj["Set Component"],maxcomponent:jsonObj["Max Component"],resultid:jsonObj["Result Id"],result0:jsonObj["Result0"]})
        const ModelType=jsonObj["Model Type"];
        const indexObj=jsonObj[1];
        console.log("---------ModelType is "+ModelType)
        console.log("---------index is "+indexObj)
    }

 
  return (
    <>
    <h1>Analysis Result</h1>
    <br></br>
    {/* <Button size='large' type='primary' align='center'>Download Result</Button> */}
    <br></br>
    <h2>Result : </h2>
    <table id="result-table">
        <tbody>
        <tr>
            <td>Run ID</td>
            <td>{details.id}</td>
        </tr>
        <tr>
            <td>Uploaded Sample File Name</td>
            <td>{details.samplefile}</td>
        </tr>
        <tr>
            <td>Model Applied</td>
            <td>{details.modelname}</td>
        </tr>
        <tr>
            <td>Updated Time</td>
            <td>{details.updatetime}</td>
        </tr>
        <tr>
            <td>Result</td>
            {/* <td>{details.result}</td> */}
        </tr>
        </tbody>
        
    </table>
    
    <br/>
    <Button size='large' align='center' margin-right='10px' margin-left='10px' onClick={mapJsonData}>Go Back</Button>
    </>
    
  )
}
