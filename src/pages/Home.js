import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


const Home = () => {
    return (
        <div>
            <Header />
            This is Home ...
            <Link to='/login' className="subList">登入</Link>
        </div>
    )
}

export default Home