const express = require('express')
const PORT = process.env.SERVER_PORT || 80;
const bodyParser = require('body-parser');

// App
const app = express();

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));   

app.get('/', (req, res) => {
  res.send('Hello From NodeJS');
});

if(!module.parent){
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app