import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'



const App = () => {
    return (
        <div>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/*' element={<Product />} />

            </Routes>
        </div>
    )
}

export default App