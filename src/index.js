const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//IMP ROUTES
const main = require('./routes/main');
const nota = require('./routes/nota');

//MIDDLEWARES ROUTES
app.use('/', main);
app.use('/nota', nota);







const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server on Port: ${PORT}`);
})

