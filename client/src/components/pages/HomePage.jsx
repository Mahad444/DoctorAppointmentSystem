import React , {useEffect}from 'react'
import axios from 'axios';

function HomePage() {
  //login A User
const getUserData = async () => {
try {
  const res = await axios.post('/api/v1/users/getUserData',{},   
  {
   headers : { 
    Authorization : "Bearer" + localStorage.getItem('token'),
  } 
   }); 

} catch (error) {
  
}

}
useEffect(() => {
  getUserData();
}, [])

  return (
    <h1>HomePage</h1>
  )

}

export default HomePage