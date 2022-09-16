import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

export const AnalyzeHistory = () => {
	const navigate = useNavigate()

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
	  href=""
	  ref={ref}
	  onClick={(e) => {
		e.preventDefault();
		onClick(e);
	  }}
	>
	  {children}
	  &#x25bc;
	</a>
  ));
// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
	({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
	  const [value, setValue] = useState('');
  
	  return (
		<div
		  ref={ref}
		  style={style}
		  className={className}
		  aria-labelledby={labeledBy}
		>
		  <Form.Control
			autoFocus
			className="mx-3 my-2 w-auto"
			placeholder="Type to filter..."
			onChange={(e) => setValue(e.target.value)}
			value={value}
		  />
		  <ul className="list-unstyled">
			{React.Children.toArray(children).filter(
			  (child) =>
				!value || child.props.children.toLowerCase().startsWith(value),
			)}
		  </ul>
		</div>
	  );
	},
  );

return (
	<div>
	<h1>AnalyzeHistory.</h1>
	<Dropdown>
	<Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      Enter file name
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1">Test-file1.csv</Dropdown.Item>
      <Dropdown.Item eventKey="2">Test-file2.csv</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
	  Test-file3.csv
      </Dropdown.Item>
      <Dropdown.Item eventKey="1">Test-file3.csv</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
	<form>
		<button>View Results</button>
	</form>
	</div>
)
}


