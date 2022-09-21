const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 4200;

app.use(express.static(__dirname + '/assets'));
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
})
app.use('/', router);
app.listen(port, () => {
  console.log(`Lidl store runninng at http://localhost:${port}`);
});