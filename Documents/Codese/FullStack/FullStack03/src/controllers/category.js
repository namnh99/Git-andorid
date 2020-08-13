const pool = require ('../utills/db')

const getAllCategory = (req,res)=>{
        pool.query('Select * from `category`;',(err,data)=>{
        if (err) res.send('Erorr Query')
        console.log(err) 
        res.send(data)    
    })
}
const getAllCategoryById = (req,res)=>{
    pool.query('Select * from `category` where `categoryId` = "0dfe6a2d-f62c-3a3c-9bc3-0901d5435004" ;',(err,data)=>{
    if (err) res.send ('Erorr Querry')
    console.log(err)
    res.send(data)
    })
}
const createAllCategory = (req,res)=>{
    res.send("create")
}
const updateCategoryById = (req,res)=>{
    res.send("update")
}
const deleteCategoryById = (req,res)=>{
    res.send("delete")
}

module.exports = {
    getAllCategory,
    getAllCategoryById,
    createAllCategory,
    updateCategoryById,
    deleteCategoryById
}

