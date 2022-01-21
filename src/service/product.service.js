import axios from 'axios'


// 本地開發
// let API_URL = 'http://localhost:8080/api/product'
// 上線地址
let API_URL = 'https://shopping-system-server.herokuapp.com/api/product'

class ProductService {
    get() {
        return axios.get(API_URL)
    }
    getOne(_id) {
        return axios.get(API_URL + '/' + _id)
    }
    post() {
        return axios.post(API_URL)
    }
    patch(_id, { title, price, productText }) {
        return axios.patch(API_URL + '/' + _id, {
            title, price, productText
        })

    }
    delete(_id) {
        return axios.delete(API_URL + '/' + _id)
    }
}





export default new ProductService()