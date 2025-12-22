import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

// ----------------------------------------------------------------------

type RequireAuthProps = {
    children: React.ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
    const { isAuthenticated, isInitialized } = useAuthContext();
    const location = useLocation();

    if (!isInitialized) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}
