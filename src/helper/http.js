import axios from 'axios';
import message from './message';

export async function get(url,config) {
  try {      
    const response = await axios.get(url,config);
    if(response.data.errcode!==0){
      console.log(response);
    }
    return response;
  } catch (error) {
    message.error('网络不给力，请稍后重试！');
    return null;
  }
}
export async function post(url,body,config) {
  try {
    const response = await axios.post(url,body,config);
    if(response.data.errcode!==0){
      console.log(response);
    }
    return response;
  } catch (error) {
    message.error('网络不给力，请稍后重试！');
    return null;
  }
}
export async function del(url, config) {
  try {
    const response = await axios.delete(url, config);
    if (response.data.errcode !== 0) {
      console.log(response);
    }
    return response;
  } catch (error) {
    message.error('网络不给力，请稍后重试！');
    return null;
  }
}
export async function put(url,body,config) {
  try {
    const response = await axios.put(url,body,config);
    if(response.data.errcode!==0){
      console.log(response);
    }
    return response;
  } catch (error) {
    message.error('网络不给力，请稍后重试！');
    return null;
  }
}