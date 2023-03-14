import React from 'react'
import { Form,Input } from 'antd';
import './Styles/Register.css';
import {Link} from 'react-router-dom';


function Login() {
  //  const navigate = useNavigate();

  // HANDLING FORM SUBMISSION
 const onFinishHandler = (values) => {
  console.log(values);
};

  return (

    <>
        <div className="form-container">
          <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
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