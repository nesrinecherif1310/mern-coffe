import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './register.css'

const Register = () => {
    const user = useSelector((state)=>state.user.currentUser)
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [error, setError] = useState(null); 

    const registerHandler = async (e)=>{
        e.preventDefault()

        if(password !== retypePassword){
            setError("Incorrect Password")
            return
        }
        try {
            const data =  await axios.post('/auth/register',{
                firstName,
                lastName,
                email,
                password
             })
             console.log(data)
             navigate('/login')
        } catch (error) {
            setError("This email is used")
        }
    }

    useEffect(()=>{
        user && navigate('/')
    },[navigate, user])
    
return (
    <div className='register-form'>
    <div className="form-box">
      <div className="form-value">
          <form action="">
              <h2 className='h-login'>Register</h2>
              <div className="inputbox">
              <i className="ri-user-line"></i>
                  <input  onChange={(e)=>setFirstName(e.target.value)}type="text" required/>
                  <label htmlFor="">FirstName</label>
              </div>
              <div className="inputbox">
              <i className="ri-user-line"></i>
                  <input onChange={(e)=>setLastName(e.target.value)}type="text" required/>
                  <label htmlFor="">LastName</label>
              </div>
              <div className="inputbox">
                  <i class="ri-mail-line"></i>
                  <input onChange={(e)=>setEmail(e.target.value)}type="email" required/>
                  <label htmlFor="">Email</label>
              </div>
              <div className="inputbox">
                  <i className="ri-lock-fill"></i>
                  <input onChange={(e)=>setPassword(e.target.value)}type="password" required/>
                  <label htmlFor="">Password</label>
              </div>
              
              <div className="inputbox">
                  <i className="ri-lock-fill"></i>
                  <input onChange={(e)=>setRetypePassword(e.target.value)}type="password" required/>
                  <label htmlFor="">Confirm Your Password</label>
              </div>
             
              <button  className='log-in' onClick={registerHandler}>Register</button>
              {error && <span className='error'>{error}</span>}
              
              <div className="register-button">
                <br />
                  <p>You have an Account <Link to="/register">Login</Link></p>
              </div>
          </form>
      </div>
    </div>
  </div>
  )
}

export default Register
