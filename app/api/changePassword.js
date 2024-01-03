import client from './client';
import authStorage from '../auth/storage';

const resetPassword = (authToken,oldPassword, newPassword1) => client.post('/change-password', { oldPassword, newPassword1}, {
    headers: {
        'x-token': authToken,
    }
});

export default {resetPassword};