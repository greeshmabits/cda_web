import { useNavigate } from 'react-router-dom'

export const AnalyzeData = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <h1>AnalyzeData</h1>
        <div>
            <label>Data sample File :</label>
            <input type="file" id="fileupload" />
        </div>
        <div>
          <label>Data Model to Apply :</label>
          <input type="text" placeholder='PCA Model 1' />
        </div>
        <button type='submit' >Analyze</button>
      </div>
      {/* <button onClick={() => navigate('order-summary')}>Place order</button> */}
    </>
  )
}
