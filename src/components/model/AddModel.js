import React ,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import axios from 'axios';

const AddModel = (properties) => {
    const navigate = useNavigate()
    const [details,setDetails] = useState({modelname:"",type:""});
    const [selectedFile, setSelectedFile] = useState(null);
    properties.funcNav(true);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
      }

    const submitHandler = async (e) => {
		e.preventDefault();
        const formData = new FormData();
        formData.append("modelname", details.modelname);
        formData.append("type", details.type);
        formData.append("modelfile", selectedFile);
        try {
            const response = await axios({
              method: "post",
              timeout: 9000,
              url: "http://52.66.217.199:9080/models/",
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response.data);
		if (response.status == 201) 
        alert("Model created successfully!"); 
        else alert("Model not created.Please try again!");          
        navigate("/manageDataModels");
	}

    
        catch(error) {
          console.log(error);
          alert("File Uploaded error/File Processing error-"+error);
        }
        
      }

    const navigateToManageModels = () => {
		navigate('/manageDataModels');
	}

  return (
    <div>
        <h1>Add Model</h1>
        <form>
        <div className='form-inner'>
            <h2>Enter the details to add model</h2>
            <div className="form-group">
                <label htmlFor="name">Modelname:</label>
                <input type="text" name="modelname" id="modelname" onChange={e => setDetails({...details, modelname: e.target.value})} value={details.modelname} required/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Type:</label>
                <input type="text" name="type" id="type" onChange={e => setDetails({...details, type: e.target.value})} value={details.type} required/>
            </div>
            <div className="form-group">
            <label>Data Model File :</label>
            <input type="file" id="fileupload" onChange={handleFileSelect} required/>
            </div>           
            <div className="form-buttons">
            <Button size='large' type='primary' align='center' margin-right='10px' onClick={submitHandler}>Add a new model</Button>
            <Button size='large' align='center' margin-right='10px' margin-left='10px' onClick={navigateToManageModels}>Cancel</Button>
            </div>
        </div>
    </form>
        </div>
  )
}

export default AddModel