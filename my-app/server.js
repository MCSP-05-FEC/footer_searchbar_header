require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// const db = require('./migration.sql');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./my-app/build" )));

const { Pool } = require('pg');
const { response } = require('express');

const pool = new Pool({
    user:process.env.DATA_USER,
    host: process.env.DATA_HOST,
    database:process.env.DATA_DATABASE,
    password:process.env.DATA_PASSWORD,
    port:process.env.DATA_PORT
});



app.get('/names', (req,res) => {
    
    // const id = Number(req.params.id);
    
    pool.query('SELECT name FROM product_items1 ',(err,data) => {
        if (err) {
            // res.send(err);
            console.log(err);
            console.log('naa bra');
        } else {
            res.send(data.rows);
            console.log(data.rows);
            console.log('we on');
        }
    });
    
    
});


app.listen(3001,function() {
    console.log('Im listening');
});
module.exports= pool;
