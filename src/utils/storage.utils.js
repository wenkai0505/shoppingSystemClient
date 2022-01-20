

class StorageUtils {
    save(user) {
        localStorage.setItem('user', JSON.stringify(user))
    }
    get() {
        return JSON.parse(localStorage.getItem("user"))
    }
    remove() {
        localStorage.removeItem('user')
    }
}

export default new StorageUtils()