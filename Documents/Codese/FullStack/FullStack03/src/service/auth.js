const db = require('..//utills/db')
const security = require('../utills/security')

const login = async (user) => {
    const getUserSql = `select username, password, role from account where username = ? ;`

    const result = await db.queryOne(getUserSql, [user.username])
    console.log(result)
    const compare = await security.verifyPassword(
        user.password,
        result.password
    )
    if (compare) {
        console.log(user)
        return security.generateToken({
            username: user.username,
            role: result.role
        })
    } else {
        return false;
    }
}

module.exports = {
    login
}