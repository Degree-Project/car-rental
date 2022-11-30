import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, isAdmin }) => {

    const { loading, isAuthenticated, user } = {};

    return (
        <>
            {loading === false && (
                isAuthenticated === false ? <Navigate to="/login" /> : isAdmin ? user.role !== "admin" ? <Navigate to="/login" /> : children : children
            )}
        </>
    );
};