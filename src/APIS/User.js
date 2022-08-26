import AxiosInstance from './confg';

export const sendLoginInfo =(obj)=>{
    return AxiosInstance.post('',obj);
};
export const sendRegisterInfo =(obj)=>{
    return AxiosInstance.post('',obj);
};
export const sendTransactionInfo =(obj)=>{
    return AxiosInstance.post('',obj);
};
export const getTransHistoryInfo =()=>{
    return AxiosInstance.get('');
};
export const getProfileCardInfo =()=>{
    return AxiosInstance.get('');
};