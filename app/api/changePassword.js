import client from './client';

const resetPassword = (oldPassword, newPassword1) => client.post('/change-password', { oldPassword, newPassword1});

export default {resetPassword};