import axios from 'axios'

let API_URL = 'http://localhost:8080/api/user'

class AuthService {
    login(email, password) {
        return axios.post(API_URL + '/login', {
            email, password
        })
    }
}

export default new AuthService()