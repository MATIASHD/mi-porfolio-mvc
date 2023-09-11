const express = require('express');
const app = express();
const rutasMain = require('./routers/main.js');
const path = require('path');

app.use(express.static(path.resolve(__dirname,'./public')));

//Server
app.listen(3000, () => { console.log('Servidor funcionando')});

//Routers
app.use('/', rutasMain);
