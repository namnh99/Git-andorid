//Cach 1
const express = require('express')
const Router = express.Router();
//Cach 2

//const Router = require('express').Router()

// Router.get('/', (req,res)=>{
//     res.send("Hello category route")
// })

const CategoryControllers = require('../controllers/category')
const { deleteCategoryById } = require('../controllers/category')

Router.get('/', CategoryControllers.getAllCategory)
Router.get('/:id', CategoryControllers.getAllCategoryById)
Router.post('/', CategoryControllers.createAllCategory)
Router.put('/:id', CategoryControllers.updateCategoryById)
Router.delete('/:id', deleteCategoryById)

module.exports = Router;