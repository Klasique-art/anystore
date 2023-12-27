import { useContext } from 'react';
import jwt_decode from 'jwt-decode';

import AuthContext from './context';
import authStorage from './storage'; 
import resetPassword from '../api/changePassword';

export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext)

    const logIn = (authToken) => {
        const user = jwt_decode(authToken);
        setUser(user)
        authStorage.storeToken(authToken)
    }

    const logOut = () => {
        setUser(null)
        authStorage.removeToken()
    }
    const changePassword = async (newPassword) => {
       
      };
    

    return {user, logIn, logOut, changePassword}
}