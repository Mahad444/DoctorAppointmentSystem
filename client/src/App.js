import React from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.js'; 
import { useSelector } from 'react-redux';
import Spinners from './components/spinners.js';



function App() {
  const {loading} = useSelector(state => state.alerts);
  return (
    <>
     {loading ? 
      ( <Spinners /> )
      :(
      <BrowserRouter>
      <Route exact path="/" component={
        <PublicRoute>{HomePage}</PublicRoute>} />
      <Route  path="/login" component={<PublicRoute>{Login}</PublicRoute>} />
      <Route path="/register" component={<PublicRoute>{Register}</PublicRoute>} />
      </BrowserRouter>
      )}
        
    </>
  );
}

export default App;
