import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import "./About.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';



const Layout = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    
  };
    return(
      <>
        <nav>
            <li className='navHeight'>
              <div className='flex-container'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              </div>
            </li>
            <div className="dropDownContainer">
            <InputLabel id="dropDownLabel">Genre</InputLabel>
            <Select className="dropDownSelected"
              labelId="dropDownLabel"
              id="dropDown"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={'adventure'}>Adventure</MenuItem>
              <MenuItem value={'children'}>Children</MenuItem>
              <MenuItem value={'fantasy'}>Fantasy</MenuItem>
              <MenuItem value={'romance'}>Romance</MenuItem>
              <MenuItem value={'literature'}>Literature</MenuItem>
            </Select>
            </div>
            
        </nav>
        <Outlet />
      </>
    )
};


export default Layout;