import React, { useEffect, useState } from 'react'
import AuthService from '../service/auth.service'
import StorageUtils from '../utils/storage.utils'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLoginSubmit = () => {
        AuthService.login(email, password)
            .then((response) => {
                StorageUtils.save(response.data.user)
                navigate('/product')
            })
            .catch((err) => {
                alert(err.response.data.msg)
            })
    }

    useEffect(() => {
        if (StorageUtils.get()) {
            navigate('/product')
        }
    }, [])


    return (
        <div className="loginWrap">
            <div className="login">
                <div className="logo"></div>
                <div className="loginFormBox">
                    <div className="signTitle">Sign in</div>
                    <div className="signText">Welcome to Ryan system, Please enter your Email and Password.</div>
                    <div className="loginForm">
                        <input onChange={handleChangeEmail} type="text" placeholder="Your Email" name="email" />
                        <input onChange={handleChangePassword} type="text" placeholder="Password" name="password" />
                        <button onClick={handleLoginSubmit} className="loginBtn">Next</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login