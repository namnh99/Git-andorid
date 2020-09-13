const db = require('../utills/db');
const sercurity = require('../utills/security')

const requireLogin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodeToken = sercurity.verifyToken(token)
        console.log(decodeToken)
        req.username = decodeToken.username
        req.role = decodeToken.role
        console.log(req.role)
        next();
    } catch (e) {
        console.log(e);
        next('xac thuc that bai')
    }
}

const requireRole = function (role) {
    const middleWare = async function (req, res, next) {
        if (req.role === role) {
            next()
        } else {
            console.log(req.role)
            console.log(role)
            next('khong duoc cap quyen')
        }
    }
    return middleWare;
}

module.exports = {
    requireLogin,
    requireRole
}