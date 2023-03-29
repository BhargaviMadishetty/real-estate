import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({ id: "", password: "" })
    const [err, setErr] = useState("")
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            navigate('/home')
        }
        else{
            navigate('/') 
        }
    },[])
    function loginFunc(e) {
        e.preventDefault()
        fetch(`https://real-estate-backend-544m.onrender.com/login`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then((res) => {
            return res.json();
        })
            .then((result) => {
                console.log(result);
                if (result.status === "Error") {
                    setErr(result.message);
                } else if (result.status === "Failed") {
                    setErr(result.message);
                } else {
                    setErr("");
                    const token = result.message.token;
                    console.log(result.message.userdetails)
                    console.log(result.message.token)
                    JSON.stringify(localStorage.setItem("token", token));
                    JSON.stringify(localStorage.setItem("user", JSON.stringify(result.message.userdetails)));

                    navigate("/home");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className='box'>
            <div id="rectangle1">
                <h2>Logo</h2>
                <form onSubmit={loginFunc}>
                    <p id='title'>Enter your credentials to access your account</p>
                    <input type='text' placeholder='Mail ID'  value={data.id} onChange={(e) => { setData({ ...data, id: e.target.value }) }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required /><br />
                    <input type='password' placeholder='Password' name='password' value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} minLength={6} required /><br />
                    <button type='submit' id="btn1">Sign In</button><br />
                </form>
                <p style={{ color: "red" }}>{err} </p>
            </div>
            <p id="sub-head1">Don't have an account?<Link to="/register" >Sign Up</Link></p>
        </div>
    )
}


export default Login
