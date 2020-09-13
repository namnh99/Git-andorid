const account = require('../service/account')
const authService = require('../service/auth')
const accountService = require('../service/account')

const login = async (req,res, next)=> {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
  
    const result = await authService.login(user)
    
    if (result) {
        res.send({
            status: 1,
            token: result
        })
    } else {
        res.status(400).send({
            status:0,
            message:'dang nhap that bai vcl'
        })
    }
    
}

const getMe = (req, res, next ) => {
    const user = accountService.getByName(req.username)
    console.log(req.username)
    res.send('get thong tin nguoi dung hien tai')
}

module.exports ={
    login,
    getMe
};