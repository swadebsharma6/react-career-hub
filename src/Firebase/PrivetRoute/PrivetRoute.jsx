import PropTypes from 'prop-types';
import { useContext } from "react";

import { Navigate } from 'react-router-dom';
import { AuthContext } from "../AuthProvider";


const PrivetRoute = ({children}) => {

    

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className='text-center'><span className="loading loading-ring loading-lg text-purple-500"></span></div>
    }

    if(user){
        return children;
    }


    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;

PrivetRoute.propTypes = {
    
    children: PropTypes.node,
}