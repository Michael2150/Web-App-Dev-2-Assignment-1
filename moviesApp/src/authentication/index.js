import { useNavigate } from 'react-router-dom';

export function GetAuthenticatedUser() {
    const Auth = {authenticated: false, user: null};
    const navigate = useNavigate();

    try {
        Auth.authenticated = localStorage.getItem('authenticated');
        Auth.user = localStorage.getItem('user');
    }
    catch (err) {
        console.log('getAuthenticatedUser, Something Went Wrong', err);
    }

    if ((!Auth.user && !Auth.authenticated) || (!Auth.user && Auth.authenticated)) {
        navigate('/login');
    } else if (Auth.user && !Auth.authenticated) {
        authenticateUser(Auth.user).then((authenticated) => {
            if (authenticated) {
                Auth.authenticated = true;
            }
        });
        if (!Auth.authenticated) {
            navigate('/login');
        }
    }
    return Auth;
}

export function setAuthenticated(authenticaded){
    try {
        localStorage.setItem('authenticated', authenticaded);
    }
    catch (err) {
        console.log('setAuthenticated, Something Went Wrong', err);
    }
}

export function setUser(user){
    try {
        localStorage.setItem('user', user);
    }
    catch (err) {
        console.log('setUser, Something Went Wrong', err);
    }
}

export function authenticateUser (user) {
    return new Promise((resolve, reject) => {
        try {
            
            setAuthenticated(true);
            resolve(true);
        }
        catch (err) {
            console.log('authenticateUser, Something Went Wrong', err);
            reject(false);
        }
    });
}