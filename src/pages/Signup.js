import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'

import '../styles/Signup.css';


const Signup = () => {
  
  const naviagte = useNavigate()

  const [error, setError] = useState({
    status:false,
    msg: "",
    type: ""
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      cpassword: data.get('cpassword'),
      number :data.get('number'),
      tc: data.get('tc')
    }

    if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
      if (actualData.password === actualData.cpassword) {
        console.log(actualData);

      document.getElementById("registration-form").reset()
      setError({ status: true, msg: "Registration Successful", type: "success" })
      naviagte('/barchart')
      } else {
        setError({ status: true, msg: "Password and Confirm Password Dosen't! Match", type: "error" })
      }
    } else {
      setError({ status: true, msg: "All filed are rquired", type: "error" })
    }
  }


  const img = "./assets/background.png";

  return (
    <div className="row signup-container">
      <div className="col-md-6 signup-container-col-1 " style={{textAlign: "center",backgroundColor: "#f2f3f5"}}>
        <img src={img} alt="welcome"/>
        <h3  >Choose a data range</h3>
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda modi adipisci placeat repellendus maiores quidem.</p>
      </div>
      <div className="col-md-6 signup-container-col-2 mb-2">
        <form  id='registration-form' onSubmit={handleSubmit}>
          <h3 className=" mt-2 text-center ">Create an account </h3>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Youy Email address
            </label>

            <input
              type="email"
              id='email'
              name='email'
              className="form-control mt-2"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Your Password
            </label>
            <input
             type="password"
              id="password"
              name='password'
              className="form-control"
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm your Password
            </label>
            <input
              type="password"
              id='cpassword'
              name='cpassword'
              className="form-control"
              
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your full name
            </label>
            <input
              type="text"
              id='name'
              name='name'
              className="form-control"
              aria-describedby="nameHelp"
            />
          </div>

          <div className="mb-3 col-xs-4 ">
            <label htmlFor="phone" className="form-label">
              Your phone number
            </label>
            <input
              type="phone"
              id='number'
              name='number'
              className="form-control"
              maxLength="10"
              aria-describedby="nameHelp"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              value="agree"
              name="tc" id="tc"
              className="form-check-input"
              
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I read and agree Term and Conditions
            </label>
          </div>

          <div className="mb-3 ">
            <button type="submit" className="btn btn-primary">
              Create account
            </button>
          </div>
        {error.status ? <Alert  variant="danger">
     {error.msg}
    </Alert> : ""}
        </form>
      </div>
    </div>
  );
};

export default Signup;
