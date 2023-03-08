const express = require('express')

const app = express()

const port = 3001

// 转账接口
app.get('/transfer', function (req, res) {
    const msg = `成功向用户${req.query.user}转账${req.query.number}`
    console.log(msg)
    res.send(msg)
  });

/**
 * 应对csrf的方式
 */

// 1.SameSite 属性
app.get('/cookie', function (req, res) {
  // express自带的设置Cookie方法
  res.cookie('userName', 'simon', {
    // 设置sameSite为Strict，第三方站点发送请求时禁止该 Cookie 的发送
    sameSite: 'Strict',
  })

  res.cookie('sex', 'man')

  res.send('设置两个cookie成功，第三方网站只会发送cookie: sex=man')
});

app.listen(port, () => {
  console.log(`Target app listening on port ${port}`)
})
