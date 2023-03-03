import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../redux/apiCalls'
import './Login.css'
const Login = () => {
    const user = useSelector((state)=>state.user.currentUser)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isFetching,error} = useSelector((state)=>state.user)

    const loginHandler = async (e)=>{
        e.preventDefault();
        login(dispatch,{email,password})
    }
    useEffect(()=>{
        user && navigate('/')

    },[navigate,user])
  return (
    <div className='login'>
      <div className="form-box">
        <div className="form-value">
            <form action="">
                <h2 className='h-login'>Login</h2>
                <div className="inputbox">
                    <i class="ri-mail-line"></i>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" required/>
                    <label htmlFor="">Email</label>
                </div>
                <div className="inputbox">
                    <i className="ri-lock-fill"></i>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" required/>
                    <label htmlFor="">Password</label>
                </div>
                <div className="forget">
                    <label htmlFor=""><input type="checkbox" />Remember Me  <Link to="/">Forget Password</Link></label>
                    
                </div>
                <button disabled={isFetching} onClick={loginHandler} className='log-in'>Log in</button>
                {error && <span className='error'>Invalid Email or Password</span>}
                <div className="register-button">
                    <p>Don't have a account <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
