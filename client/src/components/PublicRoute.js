import React from 'react';
import { Link} from 'react-router-dom';

function PublicRoute({children}) {
    // Protecting My Routes
  if(localStorage.getItem('token')){ 
    return <Link to="/" />
}else{
    return children
}
}
export default PublicRoute