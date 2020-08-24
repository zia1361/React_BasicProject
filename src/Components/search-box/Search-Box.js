import React from 'react';
 import './Search-box.css';

 function SeacrBox({placeholder, handleChange}){
     return(
         <input 
         type='search'
         placeholder = {placeholder}
         className='search-box'
         onChange={handleChange}


         />
     );
 }

 export default SeacrBox;