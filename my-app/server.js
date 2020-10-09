require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// const db = require('./migration.sql');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname,"./my-app/dist" )));
app.use(express.static(path.resolve(__dirname,'./my-app/dist')))



app.get('/headerFooter', (req, res) => {   
    res.sendFile(path.join(__dirname, "/dist/bundle.js")) });
    
    
const { Pool } = require('pg');
const { response } = require('express');

const pool = new Pool({
    user:process.env.DATA_USER,
    host: process.env.DATA_HOST,
    database:process.env.DATA_DATABASE,
    password:process.env.DATA_PASS,
    port:process.env.DATA_PORT
});



app.get('/names/:name', (req,res) => {
    let prod= req.params.name;
    // const id = Number(req.params.id);
    
    pool.query('SELECT * FROM product_items1 WHERE name=$1 ',[prod],(err,data) => {
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
