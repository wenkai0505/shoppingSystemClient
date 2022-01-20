import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Left from '../components/Left'
import ProductList from '../components/ProductList'
import ProductAdd from '../components/ProductAdd'
import ProductEdit from '../components/ProductEdit'
import { Routes, Route, Link } from 'react-router-dom'
import StorageUtils from '../utils/storage.utils'

const Product = () => {

    let APIURL = 'http://localhost:8080/'

    let [productOne, setProductOne] = useState('')

    let [user, setUser] = useState('')

    useEffect(() => {
        setUser(StorageUtils.get())
    }, [])


    return (
        <>
            <Header />
            <div className="product">
                <Left user={user} />
                <div className="right">
                    <Routes>
                        <Route path="/" element={<ProductList APIURL={APIURL} setProductOne={setProductOne} />} />
                        <Route path="/add" element={<ProductAdd APIURL={APIURL} />} />
                        <Route path="/edit/*" element={<ProductEdit APIURL={APIURL} productOne={productOne} />} />
                    </Routes>

                    <div className='productAddIcon'>
                        <Link to='/product/add' className="subList">新增商品</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product
