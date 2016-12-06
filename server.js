const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const gifFolder = './public/gifs';

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

fs.readdir(gifFolder, (err, files) => {
  if (err) {
    console.log("Can't find gif directory. Make sure you have a folder of gifs in this location => '/public/gifs' ... Then restart server.");
  }
  app.get('/gifs', (req, res) => {
    res.json(files);
  });
});

app.listen(port, (err) => {
  if (err) console.log(`Error: ${err}`);

  console.log(`Server is running on port ${port}`);
});
