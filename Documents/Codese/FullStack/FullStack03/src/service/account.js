const db = require('../utills/db')
const security = require('../utills/security')

const create = async (newAccount) => {

    const checkExisted = `SELECT count(username) as sum FROM account WHERE username = ? ;`

    const exist = await db.queryOne(checkExisted, [newAccount.username]);
    if (exist.sum > 0) {
        return 'tai khoan da ton tai'
    } else {
        const encryptedPassword = await security.generatePassword(newAccount.password)
        console.log(encryptedPassword)
        
        const insertSql = `INSERT INTO account(username, password, role) VALUES ( ? , ? ,?) ;`

        await db.query(insertSql, [
            newAccount.username,
            encryptedPassword,
            newAccount.role
        ]);
        return 'tao tk thanh cong hehe'
    }
}

const getAll = async ({limit, offset}) => {
    const sql = `
    SELECT username,password,role,display,email,phone,address,birthday,avatar,status,created_at,updated_at 
    FROM account 
    WHERE isDelete = 0
    LIMIT ?
    OFFSET ? ;`
    const countSql = `SELECT count(username) as total FROM account;`
    const data = await db.queryMulti(sql, [limit, offset])
    const {total} = await db.queryOne(countSql)
    return {
        metadata:{
            length: data.length,
            total
        }, data
    }
}

const getByName = async ({username}) => {
    const sql = `Select username, password, role
    From account
    Where username = ? And isDelete = 0
    Limit 1;`
    const result = await db.queryOne(sql, [username])
    return result
}

const updateByName = async (req, res) => {

}

const deleteByName = async (req, res) => {

}


module.exports = {
    create,
    getAll,
    getByName,
    updateByName,
    deleteByName
}