
'use client';
import React,{useState} from 'react'
import Lists  from "../components/lists.js";
const Home = () => {
  const [isVisible,SetisVisible]= useState(false);

   const toggleVisibility = () => {
     SetisVisible(!isVisible);
   };
 return (
    <div>
      <h1>Toggle List Example</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide List' : 'Show List'}
      </button>
      <Lists isVisible={isVisible} />
    </div>
  );
};  
export default Home; //as not exported in top 
