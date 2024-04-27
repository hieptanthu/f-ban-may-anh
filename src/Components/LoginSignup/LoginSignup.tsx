import React, { useState } from 'react';
import './LoginSignup.css'
import { userApi } from '../../services/userApi'
import { io } from "socket.io-client";
const socket = io("http://localhost:5001");



export const LoginSignup = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  
  const sendMessage = () => {
    
  };
  const login = () => {
   
  
    
    
    userApi.loginApi(userName, password)
      .then((res) => {
        console.log(res.user._id)
        socket.emit("login",  res.user._id );

      })
      .catch(() => {

      })



    // Emitting a custom event "login" with the userId as a query parameter

  }
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">

            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

              <form style={{ width: "23rem" }}>

                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log in</h3>

                <div className="form-outline mb-4">
                  <input type="email" id="form2Example18" onChange={(event) => { setuserName(event.target.value) }} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form2Example18">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form2Example28" onChange={(event) => { setpassword(event.target.value) }} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form2Example28">Password</label>
                </div>

                <div className="pt-1 mb-4">
                  <button className="btn btn-info btn-lg btn-block" onClick={login} type="button">Login</button>
                </div>

                <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>

              </form>

            </div>

          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            {/* <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            /> */}
          </div>
        </div>
      </div>
    </section>

  )
}

