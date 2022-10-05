import React ,{useEffect, useState} from 'react';
import {useNavigate,useParams} from "react-router-dom";
import {Button} from "antd";
import axios from 'axios';
import {single_model_url} from '../config/configuration';

export const EditModel = () => {
    const navigate = useNavigate();
    const {modelname} = useParams();
    const [details,setDetails] = useState({modelname:"",type:"",modelfile:""});
    const [selectedFile, setSelectedFile] = useState(null);
    console.log(modelname);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
      }

    const submitHandler = async (e) => {
		e.preventDefault();
        const formData = new FormData();
        formData.append("modelname", modelname);
        formData.append("type", details.type);
        formData.append("modelfile", selectedFile);
        try {
            const response = await axios({
              method: "put",
              timeout: 9000,
              url: `${single_model_url}${modelname}`,
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            });
		console.log(response.data);
        if (response.status == 200) 
        alert("Model updated successfully!"); 
        else alert("Model not updated.Please try again!");  
        navigate("/loggedin/manageDataModels");
	}
    catch(error) {
        console.log(error);
        alert("File Uploaded error/File Processing error-"+error);
      }
      
    }

    const navigateToManageModels = () => {
		navigate('/loggedin/manageDataModels');
	}

    useEffect(() => {
        loadDetails();
    },[]);

    const loadDetails= async () => {
        const result= await axios.get(`${single_model_url}${modelname}`);
        setDetails(result.data);
    }
  return (
    <div>
        <h1>Edit Model</h1>
        <form>
        <div className='form-inner'>
        <h2>Make changes to the existing model details</h2>
            <div className="form-group">
                <label htmlFor="name">Modelname:</label>
                <input type="text" name="modelname" id="modelname" disabled="true" value={modelname}/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Type:</label>
                <select onChange={e => setDetails({...details, type: e.target.value})} value={details.type}>
                    <option id='pls' value='1'>PLS</option>
                    <option id='simca' value='2'>SIMCA</option>
                </select>
            </div>
            <div className="form-group">     
            <label>Data Model File : </label>
            <label id="info-label">Upload the previously stored file or a new file.Previously stored file is : "{details.modelfile}</label>
            <input type="file" id="fileupload" onChange={handleFileSelect}/>
            </div>           
            <div className="form-buttons">
            <Button size='large' type='primary' align='center' margin-right='10px' onClick={submitHandler}>Update Model</Button>
            <Button size='large' align='center' margin-right='10px' margin-left='10px' onClick={navigateToManageModels}>Cancel</Button>
            </div>
        </div>
    </form>
        </div>
  )
}
