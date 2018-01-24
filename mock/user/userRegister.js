/**
 * Created by liaoyao on 2018/1/24.
 */
module.exports = {
  api: '/forum/user/register',
  response: function (req, res) {
    res.json({'issuccess': true, 'code': '', 'message': '操作成功', 'result': {}})
  }
}
