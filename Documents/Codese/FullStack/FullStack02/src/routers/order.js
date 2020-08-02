const express = require('express')
const pool = require('../utils/db')

const orrder_router = express.Router();

orrder_router.get('/',(req,res)=>{
    pool.query('select * from `order`;',(err,data)=>{
        if(err) res.send("Error Query")
        console.log(err)
        console.log(data)
        res.send(data)
    })
})

module.exports = orrder_router;
