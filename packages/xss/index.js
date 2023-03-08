const express = require('express')

const app = express()
app.set('view engine', 'ejs');

const port = 3000

app.get('/', function (req, res) {
  res.render('index', { title: '反射性XSS', xss: req.query.xss });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
