/*const sql = require("mssql/msnodesqlv8");
var config =require("./dbconfig");
sql.connect(config,function(err){
    if(err)console.log(err);
    var request = new sql.Request();
request.query("select * from registration ",function(err,records){
    if(err)console.log(err);
    else console.log(records);
})
})*/

'use strict';
const express = require('express');
const config = require('./dbconfig');
const cors =require('cors');
const bodyParser =require ('body-parser');
const eventRoutes =require('./routes/eventRoutes');

const app =express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api'.eventRoutes.routes);
app.listen(config.port,() => console.log('Server is listening on http://localhost:'+config.port));

