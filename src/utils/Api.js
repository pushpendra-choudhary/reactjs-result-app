import axios from 'axios';
import { ApiUrls } from './Constants';
//import { logout } from "../utils/StorageManager";
import store from '../config/store';
//import DeviceInfo from 'react-native-device-info';

const getAxiosConfig = (url, data, method) => {
    // const { token } = store.getState().login;
    // console.log("token", store.getState().login)
    let headers = {
        "content-type": "application/json"
    }
    // if (token) {
    //     headers = {
    //         'Content-type': 'application/json',
    //         Authorization: "Token token=" + token + ";device_id=" + DeviceInfo.getUniqueID()
    //     };
    //     console.log("headers", headers)
    // }
    if (method === 'GET') {
        return {
            baseURL: ApiUrls.BaseApi,
            headers,
            url,
            method: 'GET',
            params: data,
        };
    }else if(method === 'POST') {
        return {
            baseURL: ApiUrls.BaseApi,
            headers,
            url,
            method: 'POST',
            data,
        };
    }else if(method === 'PUT') {
        return {
            baseURL: ApiUrls.BaseApi,
            headers,
            url,
            method: 'PUT',
            data,
        };
    }else{
        return {
            baseURL: ApiUrls.BaseApi,
            headers,
            url,
            method: 'PATCH',
            data,
        };
    }
   
};

const getData = (endPoint, params, method) => 
    axios(getAxiosConfig(endPoint, params, method)).then(response => {
        if (response.status === 200) {
         //   console.log('response11', response);
            return response.data;
        } else {
            console.log('response12', response);
            return Promise.reject(response);
        }
    })
    .catch(error => {
        console.log("axios_err", error)
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);

        //   if(error.response.status === 401 && error.response.data.message === 'Session expired, please login'){
        //       console.log("logout")
        //      logout();
        //   }

          return Promise.reject(error.response);

        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          return Promise.reject(error);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          return Promise.reject(error);
        }
        console.log(error.config);
      });

export { getData };
