import React, { useEffect } from 'react'
import StorageUtils from '../utils/storage.utils'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();
    const handleLogout = () => {

        if (window.confirm('請問您確定要退出登入嗎？')) {
            StorageUtils.remove()
            navigate('/login')
        }
    }


    useEffect(() => {
        if (!StorageUtils.get()) {
            navigate('/login')
        }
    }, [])


    return (
        <div className="header">
            <div className="ststemLogo"></div>
            <div className="logout" onClick={handleLogout}>
                <div className="logoutIcon"></div>
                登出
            </div>
        </div>
    )
}

export default Header
