import React from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route  path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </>
  );
}

export default App;
