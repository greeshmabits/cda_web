import { useNavigate } from 'react-router-dom'
import React ,{useState} from 'react';
import useFetch from './util/useFetch';


export const AnalyzeData = () => {
  const navigate = useNavigate()
  const [modelSelection,setModelSelection] = useState("");
  const {data,loading,err} = useFetch("http://52.66.217.199:9080/models/");


  if (loading) return <h1>Loading...</h1>;

	if (err) console.log(err);

  console.log(data);  


  return (
    <>
      <form>
        <h1>AnalyzeData</h1>
        <br></br>
        <div>
            <label>Data sample File :</label>
            <input type="file" id="fileupload" />
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
      {/* <button onClick={() => navigate('order-summary')}>Place order</button> */}
    </>
  )
}
