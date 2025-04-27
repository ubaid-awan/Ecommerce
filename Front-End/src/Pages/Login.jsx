import React from 'react'
import "./CSS/login.css"  
import { Link } from 'react-router-dom'  

const handleSubmit = (e) => {
  e.preventDefault
}
const handleChange = (e) => {
  const { name, value } = e.target

}
const Login = () => {
  return (
    <div className="loginsignup">
      <div className="SignUp-container">
        <h1>Login</h1>
        <form className="SignUp-fileds" onSubmit={handleSubmit}>
          <label htmlFor="Signupemail"> Email</label>
          <input type="email" name='email' id='Signupemail' placeholder='Enter Your Email' onChange={handleChange} />
          <label htmlFor="Signuppassword"> password</label>
          <input type="password" name='password' id='Signuppassword' placeholder='Enter Your password' onChange={handleChange} />
          <input type="submit" value="submit" className='button' />
          <p className='Signup-login'>Already Have an Account? <Link to="/Signup" >SignIn Here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login