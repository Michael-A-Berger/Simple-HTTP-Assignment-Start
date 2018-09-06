const fs = require('fs');

const meme = fs.readFileSync('./client/spongegar.png');

const getMemeImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.end(meme);
};

module.exports = {
  getMemeImg,
};
