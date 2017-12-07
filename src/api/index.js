import http from './public'
import jsonp from 'jsonp'
const parseParam = function(param) {
  let paramStr = "";
  if ( typeof param == "object" ) {
    for(let key in param){
      paramStr += "&" + key + "=" + param[key];
    }
  }
  return paramStr.substr(1);
};
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/users/login', params)
}
// 退出登陆
export const loginOut = (params) => {
  return http.fetchPost('/users/loginOut', params)
}
// 用户信息
export const userInfo = (params) => {
  return http.fetchPost('/users/userInfo', params)
}
// 注册账号
export const register = (params) => {
  return http.fetchPost('/users/register', params)
}
// 上传图片
export const upload = (params) => {
  return http.fetchPost('/users/upload', params)
}
// 修改头像
export const updateheadimage = (params) => {
  return http.fetchPost('/users/updateheadimage', params)
}
// 首页接口
export const productHome = (params) => {
  return http.fetchGet('/goods/productHome', params)
}

// 自动补全
export const completion = (params,call) => {
  jsonp('https://sug.so.360.cn/suggest'+"?"+parseParam(params), null, call)
}
// 搜索
export const search = (params) => {
  return http.fetchGet('/api/search', params)
} 

