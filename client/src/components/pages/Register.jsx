import React from 'react';
import { Form,Input } from 'antd';
import './Styles/Register.css';
import {Link} from 'react-router-dom';

function Register() {
  //  const navigate = useNavigate();

  // HANDLING FORM SUBMISSION
const onFinishHandler = (values) => {
  console.log(values);
};

  return (

    <>
        <div className="form-container">
          <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
          <h2 className='text-center'>Register Form</h2>

            <Form.Item label="Name" name="name" >
              <Input type="text" required />
              </Form.Item>
            <Form.Item label="Email" name="email" >
              <Input type="email" required />
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