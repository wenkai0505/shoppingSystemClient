import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            This is Home ...
            <Link to='/login' className="subList">登入</Link>
        </div>
    )
}

export default Home