const express = require('express');
const pool = require('../utils/db')

const category_router = express.Router();

category_router.get('/', (req, res)=>{
    pool.query('select * from `category`;', (err,data)=>{
        if (err) res.send('Error Query')
        console.log(err)
        console.log(data)
        res.send(data)
    })
})

module.exports = category_router;