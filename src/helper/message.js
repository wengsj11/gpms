import { message } from 'antd';

function info(content){
    message.info(content);
}
function error(content){
    message.error(content);
}
function success(content){
    message.success(content);
}
export default {
    info,
    error,
    success,
}