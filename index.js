const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const PORT = 4000;
const app = express();

routes.get('/', () => {
  console.log("hola");
});

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => {
  console.log("Server running on port: "+PORT);
});