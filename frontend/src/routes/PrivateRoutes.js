import React from 'react';
import {Route, Navigate} from "react-router-dom";

// Auth
import { useAuth } from '../context/AuthContext';


function PrivateRoutes({ children }) {
    const {currentUser} = useAuth();

    console.log(currentUser);

    return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;