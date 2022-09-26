import { useNavigate } from 'react-router-dom'
import React ,{useState} from 'react';
import useFetch from './util/useFetch';
import axios from 'axios';


export const AnalyzeData = () => {
  const navigate = useNavigate()
  const [modelSelection,setModelSelection] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [runData,setRunData] = useState(null);
  const [analyzeData,setAnalyzeData] = useState("");
  //   const [runerror,setRunError] = useState(null);
  const {data,loading,err} = useFetch("http://52.66.217.199:9080/models/");

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("samplefile", selectedFile);
    formData.append("modelname", modelSelection);
    try {
      const response = await axios({
        method: "post",
        timeout: 9000,
        url: "http://52.66.217.199:9080/runs/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      
        alert("File Uploaded Successfully....Processing Result!");
        // setRunData(response.data);
        // console.log(runData.id);
        // console.log("------Above is the response.id");
        // const id = runData.id
        const id = 24;
        const result= await axios.get(`http://52.66.217.199:9080/analyze/${id}`);
        setAnalyzeData(result.data);
        navigate(`/analyzeData/result/${id}`, {replace: true});

    } catch(error) {
      console.log(error);
      alert("File Uploaded error/File Processing error-"+error);
    }
    
  }

  if (loading) return <h1>Loading...</h1>;

	if (err) console.log(err);

  console.log(data);  


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>AnalyzeData</h1>
        <br></br>
        <div>
            <label>Data sample File :</label>
            <input type="file" id="fileupload" onChange={handleFileSelect}/>
            </div>
            <br></br>
            <hr/>
            <div>
            <label>Data Model to Apply :</label>
            <select onChange={(e) => {e.preventDefault(); setModelSelection(e.target.value);}}>
              {
              data?.map((result)=>(<option title={result.modelname}>{result.modelname}</option>))
                }
            </select>
            <hr />
        <button type='submit' >Analyze</button>
        </div>
      </form>
    </>
  )
}
