import React, { useState } from 'react'
import ProductService from '../service/product.service'
import { useNavigate } from 'react-router-dom'


const ProductEdit = ({ APIURL, productOne }) => {
    const navigate = useNavigate();

    let { title, price, productText, pic, _id } = productOne

    let [newTitle, setNewTitle] = useState(title)
    let [newPrice, setNewPrice] = useState(price)
    let [newProductText, setNewProductText] = useState(productText)

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value)
    }

    const handlePriceChange = (e) => {
        setNewPrice(e.target.value)
    }

    const handleProductTextChange = (e) => {
        setNewProductText(e.target.value)
    }

    const handleUpdate = () => {
        ProductService.patch(_id, { title: newTitle, price: newPrice, productText: newProductText })
            .then(() => {
                navigate("/product")
            })
    }

    return (
        <div className="content">
            <div className="porductAdd">

                <div className="inputRow">
                    <label className="inputTitle">商品標題</label>
                    <input type="text" name="title" value={newTitle} onChange={handleTitleChange} />
                </div>
                <div className="inputRow">
                    <label className="inputTitle">商品介紹</label>
                    <input type="text" name="productText" value={newProductText} onChange={handleProductTextChange} />
                </div>
                <div className="inputRow">
                    <label className="inputTitle">商品價格</label>
                    <input type="text" name="price" value={newPrice} onChange={handlePriceChange} />
                </div>

                {/* <div className=" fileInputRow">
                    <input type="file" name="pic" />
                </div> */}
                <div className="imgbox">
                    <img src={APIURL + pic} alt="" />
                </div>
                <button className="btnadd" onClick={handleUpdate}>確定修改</button>

            </div>


        </div >
    )
};

export default ProductEdit;
