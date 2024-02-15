'use strict'
 const utils = require('../utils');
 const config = require('../../dbconfig');
 const sql = require('mssql/msnodesqlv8');

 const getEvents =async ()=>{

    try{
        let pool =await sql.connect(config.sql);
        const loadSqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.eventlist);
        return list.recordset;
    }catch(error){
        return error.message;
    }
 }

 module.exports={
    getEvents
 }