/**
 * Created by liaoyao on 2018/1/24.
 */
import Axios from 'axios'
import QS from 'querystring'
import { Loading, Message } from 'element-ui'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  let loadingLock
  Axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  }

  /**
   * 添加一个请求拦截器
   */
  Axios.interceptors.request.use()

  /**
   * 添加一个响应拦截器
   */
  Axios.interceptors.response.use()
  Vue.http = Axios
  Vue.prototype.$http = Axios
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
export default plugin
