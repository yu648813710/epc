const axios = require('axios');
const { url } = require('../const');

const instance = axios.create({
  baseURL: url,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  const newConfig = {
    ...config,
    data: {
      appId: 8,
      ...config.data
    },
    transformResponse: (res, headers) => {
      headers['content-type'] = 'application/json';
      return res;
    },
  };
  // 在发送请求之前做些什么
  return newConfig;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

const post = (url, data) => instance.post(url, data);

module.exports = {
  post
};