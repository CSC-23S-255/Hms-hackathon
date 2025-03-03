import React, { useState } from 'react'
import login from '../assets/login.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';




const Signup = () => {
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const navigate = useNavigate()


const handlesignup = ()=>{
 
    console.log(name,email,password)

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   alert("Account created successfully")

     navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    
  });



}


  return (
    <div style={{marginLeft:'100px',marginTop:'10px'}} className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row w-100">
                <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
                    <img width={1000} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gold-and-dark-blue-hotel-or-residence-logo-ic-design-template-d26b732db9f855e42788698f4fab6353_screen.jpg?ts=1638046652' alt="Login" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center" style={{ backgroundColor: "aliceblue", padding: "30px", borderRadius: "10px" }}>
                    <h1 style={{color:"gold"}} className="text-center mb-4"><u>We Wellcome you in Our Hotel.</u><br /><span style={{color:'black'}}>please Make Account</span></h1>
                    <label htmlFor="name" className="pl-3">Name:</label>
                    <input
                        onChange={(e)=>setName(e.target.value)}
                        type="email"
                        placeholder="Enter your name"
                        className="form-control mb-3"
                        id="name"
                        style={{ fontSize: "20px" }}
                    />

                    <label htmlFor="email" className="pl-3">Email:</label>
                    <input
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                        className="form-control mb-3"
                        id="email"
                        style={{ fontSize: "20px" }}
                    />
                    <label htmlFor="password" className="pl-3">Password:</label>
                    <input
                       onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your password"
                        className="form-control mb-3"
                        id="password"
                        style={{ fontSize: "20px" }}
                    />
                    <div className="form-check pl-3 mb-3">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" htmlFor="remember">Remember me</label>
                    </div>
                    <button onClick={handlesignup}  className="btn  w-100 " style={{ fontSize: "20px" ,backgroundColor:"gold",color:"black"}}>Login</button>
                    <p className="text-center">or</p>
                    <NavLink className="text-center d-block" to={"/"}><u>Already have an account</u></NavLink>
                </div>
            </div>
        </div>
  )
}

export default Signup
