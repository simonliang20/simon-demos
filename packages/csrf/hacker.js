const express = require('express')

const app = express()
app.set('view engine', 'ejs');

const port = 3002

app.get('/', function (req, res) {
  res.render('hacker')
});

app.listen(port, () => {
  console.log(`Hacker app listening on port ${port}`)
})
