const express = require('express')
const pool = require('../utils/db')

const user_router = express.Router();

user_router.get('/', (req, res) => {
    pool.query('select * from `user`;', (err, data) => {
        if (err) res.send('Error query')
        console.log(err)
        console.log(data)
        res.send(data)
    })
   
})

module.exports = user_router;