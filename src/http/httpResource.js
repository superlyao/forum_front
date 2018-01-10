/**
 * Created by liaoyao on 2017/9/12.
 */
import Axios from 'axios'
import { Loading, Message } from 'element-ui'

function plugin (Vue) {
  // 如果该插件已经安装则跳过这个步骤
  if (plugin.installed) {
    return
  }
  let loadingLock
  // 时间格式化
  Date.prototype.Format = function (fmt) {
    let o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S': this.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k of o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }
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
          // 将请求里面的时间格式化成字符串
          config.data[i] = new Date(config.data[i].getTime()).Format('yyyy-MM-dd hh:mm')
        }
      }
    }
    loadingLock = Loading.service({fullscreen: true})
    return config
  }, function (error) {
    Message({showClose: true, message: '请求失败', type: 'error'})
    return Promise.reject(error)
  })

  /**
   * 添加一个响应拦截器
   */
  Axios.interceptors.response.use(function (response) {
    loadingLock.close()
    return response
  }, function (error) {
    loadingLock.close()
    return Promise.reject(error)
  })
  Vue.http = Axios
  Vue.prototype.$http = Axios
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
export default plugin
