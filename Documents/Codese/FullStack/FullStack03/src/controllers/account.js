const acccountService = require('../service/account')

const create = async (req, res, next) => {
    const newAccount = {
        username: req.body.username,
        password: req.body.password,
        display: req.body.display,
        role: req.body.role
    }
    console.log(`tao moi tai khoan`, newAccount);
    if (!newAccount.username) {
        const result = {
            status: 0,
            message: 'khong de trong tai khoan'
        }
        res.status(400).send(result)
    };
    if (!newAccount.password || newAccount.password.length < 6) {
        const result = {
            status: 0,
            message: 'pass phai lon hon 6 ky tu'
        }
        res.status(400).send(result)
    };
    // if account valid
    const message = await acccountService.create(newAccount)
    res.send({
        status: 1,
        message: message
    })
}

const getAll = async (req,res) => {
    const  { data, metadata } = await acccountService.getAll(req.pagination)
    res.send({
        status: 1,
        metadata, 
        data
    })
}

const getByName = async (req,res) => {
    const {username} = req.body
    const data = await acccountService.getById(username)
    res.send({
        status: 1,
        data
    })
}

const updateByName = async (req, res) => {
    const {id} = req.params
    await acccountService.updateById(id, req.body)
    res.send({
        status: 1
    })
}

const deleteByName = async (req, res) => {
    const {id} = req.params
    await acccountService.deleteById(id)
    res.send({
        status: 1
    })
}

module.exports = {
    create,
    getAll,
    getByName,
    updateByName,
    deleteByName
}