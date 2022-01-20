import axios from 'axios'

// 本地開發
// let API_URL = 'http://localhost:8080/api/user'
// 上線地址
let API_URL = 'https://shopping-system-server.herokuapp.com/api/user'


class AuthService {
    login(email, password) {
        return axios.post(API_URL + '/login', {
            email, password
        })
    }
}

export default new AuthService()