import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import useFetch from './util/useFetch';
import axios from 'axios';

export const AnalyzeHistory = () => {
	const navigate = useNavigate();
	const {data,loading,err} = useFetch("http://52.66.217.199:9080/runs/");

    
	const handleFileSelect = (event) => {
		event.preventDefault(); 
		const index = event.target.selectedIndex;
  		const el = event.target.childNodes[index]
		console.log(el.title);
		console.log("above is the run id");
		
		const id = el.title ;
		navigate(`/analyzeData/result/${id}`, {replace: true});
	  }

	  if (loading) return <h1>Loading...</h1>;

	  if (err) console.log(err);

	

return (
	<form>
	<h1>AnalyzeHistory.</h1>
	<label>Data Model to Apply :</label>
            <select onChange={handleFileSelect}>
				<option>Select Sample File</option>
              {
              data?.map((result)=>(<option title={result.id}>{result.id}.{result.samplefile}</option>))
                }
            </select>
	</form>
	
)
}


