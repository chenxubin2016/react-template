import axios from 'axios'
import Qs from 'qs'

const baseUrl = ''

const config = {
  baseUrl,
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data, headers) {
    // 对 data 进行任意转换处理
    return data;
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],
  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 30 * 60 * 1000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default
  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default
}
const http = axios.create(config)
// 请求处理/请求异常处理
http.interceptors.request.use(config => {

}, error => {

})
// 返回数据处理/异常处理
http.interceptors.response.use(res => {

}, error => {

})
export default http

/**
 * @file: request.js
 * @method get
 * @params {url} 请求url?
 * @params {params} 请求携带参数
 * @description: get请求
 * @author: chenxubin
 * @date: 2021/3/23
 */
export const get = ({url, params}) => {
  return http.get(url, {
    method: 'get',
    params
  })
}

/**
 * @file: request.js
 * @method post请求
 * @params {url} 请求url?
 * @params {params} 请求携带参数
 * @description: post请求
 * @author: chenxubin
 * @date: 2021/3/23
 */
export const post = ({url, params}) => {
  return http.post(url, {
    method: 'post',
    data: params
  })
}
