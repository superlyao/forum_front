<template>
  <div class="box">
    <div class="item cell">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tbody>
          <tr>
            <td width="48" valign="top" align="center">
              <a href="">
                <img src="" alt="" class="avatar" border="0" align="default">
              </a>
            </td>
            <td width="10"></td>
            <td width="auto" valign="middle">
              <span class="item_tile">
                <a href="">123123</a>
              </span>
              <div class=".sep5"></div>
            </td>
            <td width="70" align="right" valign="middle">
              <a href="" class="count_livid">12</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {},
        permission: '',
        rolePermission: {}
      }
    }
  }
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.box {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e2e2;
}
.item {
  background-position: 0 bottom;
  background-repeat: repeat-x;
}
.cell {
  padding: 10px;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
}
img .avatar {
  border-radius: 4px;
}
.item_title {
  font-size: 16px;
  line-height: 130%;
  text-shadow: 0px 1px 0px #fff;
  word-wrap: break-word;
}
.sep5 {
  height: 5px;
}
</style>
