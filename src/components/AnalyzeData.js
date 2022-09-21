import { useNavigate } from 'react-router-dom'
import React from 'react';

export const AnalyzeData = () => {
  const navigate = useNavigate()
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
            <input type="text" placeholder='PCA Model 1' />
            <hr />
        <button type='submit' >Analyze</button>
        </div>
      </form>
      {/* <button onClick={() => navigate('order-summary')}>Place order</button> */}
    </>
  )
}
