const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const c = require('./controller')
app.use(bodyParser.json());

app.get('/people', c.read);

const port = 4000;
app.listen(port, ()=>{console.log(`server listening on port ${port}`)});