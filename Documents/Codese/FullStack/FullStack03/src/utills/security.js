const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('./db')

const { JWT_SECRET_KEY } = process.env
// jsonwebtoken 
const SALT_ROUNDS = 10;

const generateSalt = (pepper) => { // save salt in to database user 

}



// tao ra mat khau ma hoa, dung salt, dung hash 
// dang ky 
const generatePassword = async (password) => {

    const hashPassword = await bcrypt.hashSync(password, SALT_ROUNDS);
    return hashPassword;
}


// dang nhap 
// sau khi dang nhap dc cap token
const generateToken = (data) => {
    const token = jwt.sign(
        data, JWT_SECRET_KEY,
        {
            expiresIn: 1000 * 60 * 60 * 24
        }
    )
    return token

    // jwt generateToken limit thoi gian song , co salt random 
}

const verifyPassword = async (password, hashPassword) => {
    const result = await bcrypt.compare(password, hashPassword);
    return result;
}
// sau khi co token, luu lai, moi khi truy cap thi gui len
const verifyToken = (token) => {
    const data = jwt.verify(token, JWT_SECRET_KEY)
    return data
}
const verifyUserName = async (username) => {

    const sql = `SELECT username FROM account `
    const data = await db.queryMulti(sql)
    const result = data.map(e => e.username).indexOf(username)
    return result;

}

module.exports = {
    generatePassword,
    generateToken,
    verifyToken,
    verifyPassword,
    verifyUserName

}