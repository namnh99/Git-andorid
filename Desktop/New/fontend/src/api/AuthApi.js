const { default: Axios } = require("axios")
const { LOGIN } = require("../constant/EndPoint")

export const login = async (username, password) =>{
    let result = null;
    let body = {
        username: username,
        password: password
    }
    let config = {
        url: LOGIN,
        method: 'POST',
        data: body
    }
    await Axios(config).then((res)=>{
        result = res;
    })
    .catch((err)=>{
        result = err.response
    })
    return result
} 