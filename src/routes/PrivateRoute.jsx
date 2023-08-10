import React from 'react';
import { Navigate, Route } from 'react-router-dom';

export const RequireAuth = ({ isLogged, tipo, children }) => {
  
  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  if(tipo!=='admin'){
    console.log(tipo)
    return <Navigate to="/noadmin" />;
  }
  return children;
};