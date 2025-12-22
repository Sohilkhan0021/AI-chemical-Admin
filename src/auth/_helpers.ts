import axios from 'axios';

// ----------------------------------------------------------------------

export const setSession = (accessToken: string | null) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.removeItem('accessToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

export const isValidToken = (accessToken: string) => {
    if (!accessToken) {
        return false;
    }
    // Simple check for now. In a real app we might decode JWT and check expiry.
    // For this strictly requested flow, existence is our primary check before API validation.
    return true;
};
