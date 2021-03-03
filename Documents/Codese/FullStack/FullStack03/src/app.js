const express = require('express')
const dotent = require('dotenv').config()
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const pagination = require('./middlewares/pagination')
//dia chi IP - localhost / 127.0.0.1
//so hieu cong - port (max = 65536)
const accountRouter = require('./routers/account')
const authRouter = require('./routers/auth')
const categoryRouter = require('./routers/category')

app.use(cors());
app.use(bodyParser.json())
app.use(pagination)

const checkHealth = (req,res) =>{
    //client: req - cau hoi
    //server: res - cau tra loi
    res.send("Still Alive")
}
app.get("/api/v1", checkHealth)

//Resful Api
//acount
//CRUD  - Create: POST BASE_URL/account
//      - Read 1:  GET BASE_URL/account/:id
//      - Read N: GET BASE_URL/account
//      - Update: PUT BASE_URL/account/:id
//      - Delete: DELETE BASE_URL/account/:id

//router
app.use('/api/v1/account',accountRouter)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/category',categoryRouter)

const log = ((req,res,next) => {
    console.log('====================');
    console.log('req.originalUrl\t', req.originalUrl)
    console.log('req.params\t', req.parmas)
    console.log('req.body\t', req.body) //chi post moi co
    console.log('req.query\t', req.query)
    next();
})

app.use(log)

const PORT = process.env.API_PORT
app.listen(PORT, (err)=>{
    if (err) console.log(err)
    else { console.log(`App listen at ${PORT}`)}
}) // (diachi IP): so cong