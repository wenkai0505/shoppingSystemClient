import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductService from '../service/product.service'


const ProductAdd = ({ APIURL }) => {

    const navigate = useNavigate();

    let action = `${APIURL}api/product`

    let [file, setFile] = useState('')
    let [imageSrc, setImageSrc] = useState("")


    const handleChangeFile = (e) => {
        // 實現圖片預覽
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            setImageSrc(reader.result)
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
        setFile(file)
    }


    const handleSubmit = () => {

        ProductService.get()
            .then(() => {
                navigate('/product')
            })
            .catch((err) => {
                console.log(err)
            })
    }





    return (
        <div className="content">
            <form className="porductAdd" action={action} method="POST" encType="multipart/form-data">

                <div className="inputRow">
                    <label className="inputTitle">商品標題</label>
                    <input type="text" name="title" />
                </div>
                <div className="inputRow">
                    <label className="inputTitle">商品介紹</label>
                    <input type="text" name="productText" />
                </div>
                <div className="inputRow">
                    <label className="inputTitle">商品價格</label>
                    <input type="text" name="price" />
                </div>

                <div className=" fileInputRow">
                    <input onChange={handleChangeFile} type="file" name="pic" />
                </div>
                <div className="imgbox">
                    <img src={imageSrc} alt="" />
                </div>
                <button className="btnadd" type='submit' onClick={handleSubmit}>新增商品</button>

            </form>


        </div >


    )
}

export default ProductAdd
