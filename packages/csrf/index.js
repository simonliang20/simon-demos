const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

const port = 3001

// 转账接口
app.get('/transfer', function (req, res) {
    const msg = `成功向用户${req.query.user}转账${req.query.number}`
    console.log(msg)
    res.send(msg)
});
app.post('/transfer', function (req, res) {
    const msg = `成功向用户${req.body.user}转账${req.body.number}`
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

  // 默认sameSite=Lax
  res.cookie('sex', 'man')

  res.send('设置两个cookie成功')
});

app.listen(port, () => {
  console.log(`Target app listening on port ${port}`)
})
