import React from 'react'
import { Link } from 'react-router-dom'


const Left = ({ user }) => {



    const handleShowMenu = () => {

        let menushow = document.querySelector(".menushow");
        let menuclear = document.querySelector(".menuclear");
        let mobileLeft = document.querySelector(".mobileLeft");
        mobileLeft.style = "left: 0px";
        menushow.style = "display: none";
        menuclear.style = "display: block";
    }

    const handleClearMenu = () => {

        let menushow = document.querySelector(".menushow");
        let menuclear = document.querySelector(".menuclear");
        let mobileLeft = document.querySelector(".mobileLeft");
        mobileLeft.style = "left: -250px";
        menushow.style = "display: block";
        menuclear.style = "display: none";
    }



    return (
        <>
            <div className="left leftStyle">
                <div className="menu menuStyle">
                    {
                        user &&
                        <div className="info">
                            <p>帳號：{user.username}</p>
                            <p>信箱：{user.email}</p>
                        </div>
                    }

                    <div className="list" >
                        <div className="liTitle">商品管理</div>
                        <Link to='/product' className="subList">商品列表</Link>
                        <Link to='/product/add' className="subList">新增商品</Link>
                    </div>



                </div>
            </div>
            <div className="mobileLeft leftStyle">
                <div className="mobileMenu menuStyle">
                    <div className="menushow" onClick={handleShowMenu}></div>
                    <div className="menuclear" onClick={handleClearMenu}></div>
                    {
                        user &&
                        <div className="info">
                            <p>帳號：{user.username}</p>
                            <p>信箱：{user.email}</p>
                        </div>
                    }

                    <div className="list" >
                        <div className="liTitle">商品管理</div>
                        <Link to='/product' className="subList">商品列表</Link>
                        <Link to='/product/add' className="subList">新增商品</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Left
