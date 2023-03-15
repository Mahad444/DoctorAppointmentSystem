import React from 'react';
import { Form,Input, message } from 'antd';
import axios from 'axios';
import './Styles/Register.css';
import {Link} from 'react-router-dom';

function Register() {

  //  const navigate =;

  // HANDLING FORM SUBMISSION
const onFinishHandler =  async (values) => {
 try{
    const res = await axios.post('/api/v1/users/register',values); 
    if(res.data.success){
      message.success("Registered Successfully");
      // navigate('/login');
    }else{
      message.error("Something went wrong");
    }
  }
  catch(err){
    message.error("Something went wrong");
  }
};

  return (

    <>
        <div className="form-container">
          <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
          <h2 className='text-center'>Registration Form</h2>

            <Form.Item label="Name" name="name" >
              <Input type="text" required />
              </Form.Item>
            <Form.Item label="Email" name="email">
              <Input type="email" require />
              </Form.Item>
            <Form.Item label="Password" name="password" >
              <Input type="password" required />
              </Form.Item>
              <Link to={'/login'} className='m-2'>Already Registered Login</Link>
              <button type="submit" className="btn btn-primary">Register</button>
            </Form>
      </div>
    </>
  )
}

export default Register