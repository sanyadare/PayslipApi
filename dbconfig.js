'use strict';
const dotenv =require('dotenv');
const assert =require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, SQL_USER,SQL_PASSWORD,SQL_DATABASE,SQL_SERVER, SQL_DRIVER}=process.env; 

const sqlEncrypt = process.env.Encrypt ==="true";

assert(PORT,'PORT is required');
assert(HOST,'HOST is required');

module.exports={
    port:PORT,
    host:HOST,
    url:HOST_URL,
    sql:{
        server:"SQL_SERVER",
        database:"SQL_DATABASE",
        driver:"msnodesqlv8",
        user:"sanya",
        password:"",
    options:{
        trustedConnection:true
    }
    }

}
/*

const config ={
    server:"DESKTOP-O6L0LBE",
    database:"alphaHRM",
    driver:"msnodesqlv8",
    user:"sanya",
    password:"",
    options:{
        trustedConnection:true
    }
}

module.exports=config;
*/