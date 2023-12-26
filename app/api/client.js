import {create} from 'apisauce';

const apiClient = create({
    baseURL: "https://pacific-sierra-04938-5becb39a6e4f.herokuapp.com/api",
});

export default apiClient;