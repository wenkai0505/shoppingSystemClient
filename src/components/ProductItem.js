import React, { useState } from 'react'
import ProductService from '../service/product.service'
import { useNavigate } from 'react-router-dom'


const ProductItem = ({ item, setProductList, APIURL, setProductOne }) => {


    let { _id, title, productText, pic, price, date, month } = item

    const navigate = useNavigate();




    const handleDelete = (_id) => {
        ProductService.delete(_id)
            .then(() => {
                ProductService.get()
                    .then((response) => {
                        setProductList(response.data.product)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })

    }

    const handleEdit = (_id) => {
        ProductService.getOne(_id)
            .then((response) => {
                setProductOne(response.data.data)
                navigate("/product/edit/")
            })
            .catch((err) => {
                console.log(err)
            })

    }



    return (
        <div className="formRow rowType" key={_id}>
            <div className="date td1 tdType">{month}/{date}</div>
            <div className="pic td2 tdType">
                <img src={APIURL + pic} alt="" />
            </div>
            <div className="title td3 tdType">{title}</div>
            <div className="introduc td4 tdType">{productText}</div>
            <div className="price td5 tdType">{price}</div>
            <div className="control td6 tdType">
                <div onClick={() => { handleEdit(_id) }} className="btn edit">編輯</div>
                <div className="btn delete" onClick={() => (handleDelete(_id))}>刪除</div>
            </div>
        </div >
    )
}

export default ProductItem
