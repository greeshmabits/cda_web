import { useNavigate } from 'react-router-dom'
import React from 'react';
import Logout from '../App';

export const WelcomePage = ({username}) => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Chemometric Data Analyzer</h1>
      <h2>Welcome {username},</h2>
      <form className='welcome-data-container'>
      
      
      <p>This is Chemometric Data Analyzer (CDA) tool. The navigation bar provides different features of CDA tool.</p>
      <p>Chemometrics is the science of extracting information from chemical systems by data-driven means. 
It uses methods, frequently employed in core data-analytic disciplines such as multivariate statistics, 
applied mathematics, and computer science, to address problems in chemistry, biochemistry, 
medicine, biology, and chemical engineering. Spectroscopy is the study of the absorption and 
emission of light and other radiation by matter. This project aims at providing a solution to analyse
the sample data collected using Spectroscopy techniques by applying the chemometrics analytical 
processes. The outcome of the analysis is a set of quality and composition parameters as defined in 
the chemometric analytical models along with their measured values in the sample. This project can 
be categorized under the Data Science and Analytics domain.</p>
<br></br>
<button onClick={Logout}>Logout</button>
</form>

    </>
  )
}

