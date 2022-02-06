import { TextField }    from '@mui/material';
import React            from 'react';

import '../../styles/header.css' 

const Header = () => {
  return(
      <div className='header'>
          <span className='title'>Find Meaning</span>
          <div className='inputs'>
              <TextField 
                className   ='search'
                id          ='filled-basic'
                label       ="Search a word"
                variant     ='standard'
              />
              <TextField 
                select
                label       ='language'
                className   ='select'
                variant     ='standard'
              />
          </div>
      </div>
  )
};

export default Header;
