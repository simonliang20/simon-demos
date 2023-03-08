const express = require('express')

const app = express()
app.set('view engine', 'ejs');

const port = 3000

app.get('/', function (req, res) {
  res.render('index', { title: '反射性XSS', xss: req.query.xss });
});

/**
 * 应对XSS攻击的方式
 */

// 对输入脚本转码
const escape = require('escape-html');
app.get('/escape', function (req, res) {
  const xss = escape(req.query.xss)
  console.log(xss)
  res.render('index', { title: '反射性XSS-escape', xss });
});

// TODO:CSP

// http-only
app.get('/cookie', function (req, res) {
  // express自带的设置Cookie方法
  res.cookie('userName', 'simon', {
    // 设置该Cookie只可以由服务端访问，即前端JavaScript无法访问document.cookie获取该值，但控制台还是可以查看和修改
    httpOnly: true,
  })

  res.cookie('sex', 'man')

  res.send('设置两个cookie成功，通过document.cookie只能获取sex=man')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
