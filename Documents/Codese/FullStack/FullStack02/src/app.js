const express = require('express');

const app = express();

const user = require('./routers/user');
app.use('/user',user);

const category = require('./routers/category');
app.use('/category',category);

const product = require('./routers/product');
app.use('/product', product);

const order = require('./routers/order');
app.use('/order', order);

app.listen(8080, (err)=>{
    if (err) {console.log(err)} else 
    console.log("App listen at 8080")
})

