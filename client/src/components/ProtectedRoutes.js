import React from 'react';
import { Link,useLocation } from 'react-router-dom';

function ProtectedRoutes({children}) {
    // Protecting My Routes
    if(localStorage.getItem('token')){
        return children 
    }else{
        return <Link to="/login" />
    }
}

export default ProtectedRoutes