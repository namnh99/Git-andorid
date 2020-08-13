const express = require('express')

const app = express();
//dia chi IP - localhost / 127.0.0.1
//so hieu cong - port (max = 65536)

const hamxuli = (req,res) =>{
    //client: req - cau hoi
    //server: res - cau tra loi
    res.send("Still Alive")
}
app.get("/", hamxuli)

//Resful Api
//acount
//CRUD  - Create: POST BASE_URL/account
//      - Read 1:  GET BASE_URL/account/:id
//      - Read N: GET BASE_URL/account
//      - Update: PUT BASE_URL/account/:id
//      - Delete: DELETE BASE_URL/account/:id

const categoryRouter = require('./routers/category')
app.use('/api/v1/category',categoryRouter)


app.listen(5000, (err)=>{
    if (err) console.log(err)
    else { console.log("App listen at 5000")}
}) // (diachi IP): so cong