import { useEffect, useReducer, useCallback, useMemo } from 'react';
// import axios from 'axios';
// utils
import { isValidToken, setSession } from '../_helpers';
//
import { AuthContext } from '../useAuthContext';
import type { AuthState, User } from '../_models';

// ----------------------------------------------------------------------

const initialState: AuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

type AuthAction =
    | { type: 'INITIALIZE'; payload: { isAuthenticated: boolean; user: User | null } }
    | { type: 'LOGIN'; payload: { user: User } }
    | { type: 'REGISTER'; payload: { user: User } }
    | { type: 'LOGOUT' };

const reducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'INITIALIZE':
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                isInitialized: true,
                user: action.payload.user,
            };
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case 'REGISTER':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

// ----------------------------------------------------------------------

interface Props {
    children: React.ReactNode;
}

export function JWTProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const initialize = useCallback(async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            if (accessToken && isValidToken(accessToken)) {
                setSession(accessToken);

                // MOCK API call to get user profile. Replace with actual API endpoint
                // const response = await axios.get('/api/account/my-account');
                // const { user } = response.data;

                // Mocking successful user fetch for now since no real backend provided yet
                const user: User = {
                    id: '8864c717-587d-472a-929a-8e5f298024da-0',
                    email: 'admin@ai-chem.com',
                    firstName: 'Admin',
                    lastName: 'User',
                    role: 'admin',
                };

                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: true,
                        user,
                    },
                });
            } else {
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        } catch (err) {
            console.error(err);
            dispatch({
                type: 'INITIALIZE',
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            });
        }
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    // ----------------------------------------------------------------------

    const login = useCallback(async (email: string, _password: string) => {
        // const response = await axios.post('/api/account/login', {
        //   email,
        //   password,
        // });
        // const { accessToken, user } = response.data;

        // MOCK LOGIN
        await new Promise(resolve => setTimeout(resolve, 1000));
        const accessToken = 'mock-jwt-token-1234567890';
        const user: User = {
            id: '8864c717-587d-472a-929a-8e5f298024da-0',
            email,
            firstName: 'Sohil',
            lastName: 'Khan',
            role: 'admin',
        };

        setSession(accessToken);

        dispatch({
            type: 'LOGIN',
            payload: {
                user,
            },
        });
    }, []);

    const register = useCallback(async (email: string, _password: string, firstName: string, lastName: string) => {
        // const response = await axios.post('/api/account/register', {
        //   email,
        //   password,
        //   firstName,
        //   lastName,
        // });
        // const { accessToken, user } = response.data;

        // MOCK REGISTER
        await new Promise(resolve => setTimeout(resolve, 1000));
        const accessToken = 'mock-jwt-token-register-12345';
        const user: User = {
            id: 'new-user-id',
            email,
            firstName,
            lastName,
            role: 'user',
        };

        setSession(accessToken);

        dispatch({
            type: 'REGISTER',
            payload: {
                user,
            },
        });
    }, []);

    const logout = useCallback(async () => {
        setSession(null);
        dispatch({ type: 'LOGOUT' });
    }, []);

    const memoizedValue = useMemo(
        () => ({
            ...state,
            method: 'jwt' as const,
            login,
            register,
            logout,
        }),
        [state, login, register, logout]
    );

    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
