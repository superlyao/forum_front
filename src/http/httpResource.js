/**
 * Created by liaoyao on 2017/9/12.
 */
import Axios from 'axios'
import { Loading, Message } from 'element-ui'

// 设置默认请求头
Axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': '*'
}

/**
 * 添加一个请求拦截器
 */
Axios.interceptors.request.use(function (config) {
  if (config.data) {
    config.data = Object.assign({}, config.data)
    for (let i of Object.keys(config.data)) {
      if (config.data[i] instanceof Date) {
        config.data[i] = new Date(config.data[i].getTime()).Format('yyyy-MM-dd hh:mm')
      }
    }
  }
  Loading.service({fullscreen: true})
  return config
}, function (error) {
  Message({showClose: true, message: '请求失败', type: 'error'})
  return Promise.reject(error)
})
