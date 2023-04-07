const puppeteer = require('puppeteer');


const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
      const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://shenzhen.qfang.com/');

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js' })


  const searchResultSelector = '#__layout > div > main > div > div.home-header > div.top-box > div.logo-city > div.logo-wrap > a > i';


  const result = await page.evaluate(() => {
    return new Promise((resolve) => {
        const searchResultSelector = '#__layout > div > main > div > div.home-header > div.top-box > div.logo-city > div.logo-wrap > a > i';
      html2canvas(document.querySelector(searchResultSelector), {
        backgroundColor: null,
        scale: 4,
        dpi: window.devicePixelRatio * 4
      }).then(canvas => {
        const dataURL = canvas.toDataURL();
        document.body.appendChild(canvas)
        canvas.toBlob(function (blob) {
          resolve(dataURL)
        });
      });
    })
  });

  console.log('result', result)



  // const element = await page.waitForSelector('canvas');

  // const imageBuffer = await element.screenshot({ omitBackground: false });

  // res.set("Content-Type", "image/png");
  // res.send(imageBuffer);

  await browser.close();

  // console.log(element.screenshot)

  // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);


  var img = Buffer.from(result, 'base64');
  console.log('img', img)
  // res.contentType('image/png');
  // res.set({
  // 'Content-Type': 'image/png'
  // })
  // res.writeHead(200, [['Content-Type', 'image/png']]);
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
