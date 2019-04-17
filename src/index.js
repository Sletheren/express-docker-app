const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 80;
const bodyParser = require('body-parser');

// App
const app = express();

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));   
app.use('/assets', express.static(path.join(__dirname,'assets')));

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

if(!module.parent){
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app