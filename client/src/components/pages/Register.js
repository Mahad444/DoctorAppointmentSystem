import React from 'react';
import { Form,Input, message } from 'antd';
// importing axios for making api calls
import axios from 'axios';
import './Styles/Register.css';
import {Link,useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { showLoading,hideLoading } from '../../Redux/Features/alertSlice';


function Register() {

  const navigate = useHistory();
  const dispacth = useDispatch();

  // HANDLING FORM SUBMISSION 
const onFinishHandler =  async (values) => {
 try{
  // importing sgowLoading and hideLoading from alertSlice
  dispacth(showLoading());
  // making api call to register user using axios with POST method
    const res = await axios.post('/api/v1/users/register',values); 
    dispacth(hideLoading());
    if(res.data.success){
      message.success("Registered Successfully");
     navigate.push('/login');
    }else{
      message.error(res.data.message);
    }
  }
  catch(err){
    dispacth(hideLoading());
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