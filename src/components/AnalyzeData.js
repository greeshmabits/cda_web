import { useNavigate } from 'react-router-dom'
import React ,{useState} from 'react';
import { Menu, Dropdown } from 'antd';
import useFetch from './util/useFetch';


export const AnalyzeData = () => {
  const navigate = useNavigate()
  const {data,loading,err} = useFetch("http://52.66.217.199:9080/models/");
  if (loading) return <h1>Loading...</h1>;

	if (err) console.log(err);

  console.log(data);  

  const renderModelNames =data.map((data,index) => {
		return (
			<Menu.Item key={index}>
			{data.modelname}
			</Menu.Item>
		)
	})

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
          
            <Dropdown
          overlay={(
            <Menu>
                {renderModelNames} 
            </Menu>
          )}
          trigger={['click']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Select Model name
          </a>
        </Dropdown>
            <hr />
        <button type='submit' >Analyze</button>
        </div>
      </form>
      {/* <button onClick={() => navigate('order-summary')}>Place order</button> */}
    </>
  )
}
