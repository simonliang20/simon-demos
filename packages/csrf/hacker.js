const express = require('express')

const app = express()
app.set('view engine', 'ejs');

const port = 3002

app.get('/img', function (req, res) {
  res.render('img')
});

app.get('/link', function (req, res) {
  res.render('link')
});

app.get('/form-get', function (req, res) {
  res.render('form-get')
});

app.get('/form-post', function (req, res) {
  res.render('form-post')
});

app.listen(port, () => {
  console.log(`Hacker app listening on port ${port}`)
})
