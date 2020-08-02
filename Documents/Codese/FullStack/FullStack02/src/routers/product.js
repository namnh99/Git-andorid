const express = require('express')
const pool = require('../utils/db')

const product_router = express.Router();

product_router.get('/',(req,res)=>{
    pool.query('select * from `product`;',(err,data)=>{
        if (err) res.send("Error Query")
        console.log(err)
        console.log(data)
        res.send(data)
    })
})

module.exports = product_router;