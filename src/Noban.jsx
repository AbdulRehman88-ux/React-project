import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



const Noban = ({children}) => {
 
 const location =  useLocation();

 const[showNoban,setShowNoban] = useState(false)


 
 
  useEffect(() =>{
   
    // console.log('this is location:',location)
   
   
    if (location.pathname === '/'){
        setShowNoban(true)
     }
     else{
        setShowNoban(false)
     }

  },[location])
 
 
    return (
    <div>{showNoban && children}</div>
  )
}

export default Noban