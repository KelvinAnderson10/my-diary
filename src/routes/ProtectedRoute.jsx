import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthListener } from '../hooks/useAuth';


const ProtectedRoute = () => {
    const { loggedIn, checkingStatus } = useAuthListener();
    return (
        <>
            {
                checkingStatus
                    ?
                    // TODO: loading state component
                    <></>
                    : loggedIn
                        ? <Outlet />
                        : <Navigate to={'/'} />
            }
        </>
    );
};

export default ProtectedRoute;