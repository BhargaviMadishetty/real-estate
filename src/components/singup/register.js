import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Register.css'
const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ id: "", password: "", confirm_password: "" })
  const [err, setErr] = useState("")
  function handleSignIn(e) {
    e.preventDefault()
    if (data.password != data.confirm_password) {
      setErr('Password mismatch')
      navigate('/register')
    }
    else{
    fetch(`https://real-estate-backend-544m.onrender.com/register`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    })
      .then((SucessMessage) => {
        console.log("Signup successful:", SucessMessage);
        setData({
          id:"",
          password: "",
          confirm_password:""
        });
        navigate("/");
      })
      .catch((err) => {
        setErr("User already exists with the given email. Try log in");
        console.log(err);
      });
    }
  }
  return (
    <div className='box'>
      <div id="rectangle">
        <h2>Logo</h2>
        <p id='title'>Create New Account</p>
        <form onSubmit={handleSignIn}>
          <input type='text' placeholder='Mail ID' value={data.id} onChange={(e) => { setData({ ...data, id: e.target.value }) }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required /><br />
          <input type='password' placeholder='Password' name='password' value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} minLength={6} required /><br />
          <input type='password' placeholder='Confirm Password' name='confirm_password' value={data.confirm_password} onChange={(e) => { setData({ ...data, confirm_password: e.target.value }) }} minLength={6} required /><br />
          <button type='submit' id="btn1" >Sign up</button><br />
        </form>
        <p style={{ color: "red" }}>{err}</p>
      </div>
      <Link id="sub-head" to="/" >Sign in</Link>
    </div>
  )
}


export default Register
