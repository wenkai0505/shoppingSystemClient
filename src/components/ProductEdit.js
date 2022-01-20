import React, { useEffect, useState } from 'react';

const ProductEdit = ({ APIURL, productOne }) => {


    let { title, price, productText, pic } = productOne


    return (
        <div className="content">
            <div className="porductAdd">

                <div className="inputRow">
                    <label className="inputTitle">商品標題</label>
                    <input type="text" name="title" value={title} />
                </div>
                <div className="inputRow">
                    <label className="inputTitle">商品介紹</label>
                    <input type="text" name="productText" value={productText} />
                </div>
                <div className="inputRow">
                    <label className="inputTitle">商品價格</label>
                    <input type="text" name="price" value={price} />
                </div>

                {/* <div className=" fileInputRow">
                    <input type="file" name="pic" />
                </div> */}
                <div className="imgbox">
                    <img src={APIURL + pic} alt="" />
                </div>
                <button className="btnadd" type='submit'>確定修改</button>

            </div>


        </div >
    )
};

export default ProductEdit;
