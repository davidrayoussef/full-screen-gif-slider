const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const gifFolder = './public/gifs';

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

fs.readdir(gifFolder, (err, files) => {
  fs.writeFileSync('public/fileNames.json', JSON.stringify(files));
});

app.listen(port, (err) => {
  if (err) console.log(`Error: ${err}`);

  console.log(`Server is running on port ${port}`);
});