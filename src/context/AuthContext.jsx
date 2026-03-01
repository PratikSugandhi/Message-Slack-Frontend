
import { createContext,useEffect,useState } from 'react';

const AuthContext = createContext(); //creating context

export const AuthContextProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: null
    });

    useEffect(() => {
        // getting the data from local storage
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if(user && token) {
            setAuth({
                user: JSON.parse(user),
                token
            });
        }
    } , []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;