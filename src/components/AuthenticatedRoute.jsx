import React from 'react'
import { useContext } from 'react';
import Auth from '../context/Auth';
import { Route } from 'react-router';
import { Redirect } from 'react-router';

const AuthenticatedRoute = ({path , component}) => {
 
    const {isAuthenticated} = useContext(Auth);
    
    return isAuthenticated ? (
    <Route exact path={path} component={component}/>
  ) : (
    <Redirect to="/login" />
  )
}

export default AuthenticatedRoute