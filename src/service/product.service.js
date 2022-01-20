import axios from 'axios'

let API_URL = 'http://localhost:8080/api/product'

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
    patch(_id) {
        return axios.patch(API_URL + '/' + _id, {
        })
    }
    delete(_id) {
        return axios.delete(API_URL + '/' + _id)
    }
}





export default new ProductService()