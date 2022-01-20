import React, { useEffect, useState } from 'react'
import ProductService from '../service/product.service'
import ProductItem from './ProductItem'

const ProductList = ({ APIURL, setProductOne }) => {

    let [productList, setProductList] = useState(null)


    useEffect(() => {

        ProductService.get()
            .then((response) => {
                setProductList(response.data.product)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="content">
            <div className="productList">
                <div className="formTitle rowType">
                    <div className="td1 tdType">日期</div>
                    <div className="td2 tdType">圖標</div>
                    <div className="td3 tdType">標題</div>
                    <div className="td4 tdType">介紹</div>
                    <div className="td5 tdType">價格</div>
                    <div className="td6 tdType">操作</div>
                </div>

                {
                    productList && productList.length !== 0 && productList.map((item) => {
                        return (
                            <ProductItem key={item._id} item={item} setProductList={setProductList} APIURL={APIURL} setProductOne={setProductOne} />
                        )
                    })
                }


            </div>
        </div>
    )
}

export default ProductList
