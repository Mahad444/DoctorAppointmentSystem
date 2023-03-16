import React from 'react'
import { Form,Input,message } from 'antd';
import './Styles/Register.css';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';  


function Login() {
   const navigate = useHistory();

  // HANDLING FORM SUBMISSION
 const onLoginHandler = async (values) => {
  try{
    const res = await axios.post('/api/v1/users/login',values); 
    if(res.data.success){   
      localStorage.setItem('token',res.data.token);
      message.success("Logged In Successfully");
     navigate.push('/');
    }else{
      message.error(res.data.message);
    }
  }
  catch(err){
    message.error("Something went wrong");
  }
};

  return (

    <>
        <div className="form-container">
          <Form layout='vertical' onFinish={onLoginHandler} className='register-form'>
          <h2 className='text-center'>Login</h2>
            <Form.Item label="Email" name="email" >
              <Input type="email" required />
              </Form.Item>
            <Form.Item label="Password" name="password" >
              <Input type="password" required />
              </Form.Item>
              <Link to={'/register'} className='m-2'>Not Registered?Register Here</Link>
              <button type="submit" className="btn btn-primary">Login</button>
            </Form>
      </div>
    </>
  )
}

export default Login