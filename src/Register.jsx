import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { firebaseAuth } from './firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [isAlertVisible, SetIsAlertVisible] = useState(false)


  const onClickLogin = () => {
    SetIsAlertVisible(true)
  }

  const onCloseAlert = (e) => {
    if (e.target.checked) {
      SetIsAlertVisible(false)
    }
  }

  const onSignup = async () => {
    return createUserWithEmailAndPassword(firebaseAuth, "kelvinanderslampa17@gmail.com", "123456")
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error msg", errorMessage);
        // ..
      });
  };
  

  return (
    <div className='paper container container-xs login-form'>
      <h3 className='page-header'>Buku Harianku !</h3>
      <h4 className='page-title'>Sign Up</h4>
      {/* Form */}
      <div class="form-group">
        <label>Username</label>
        <input class="input-block" type="text"/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input class="input-block" type="password"/>
      </div>
      {/* Alert */}
      {isAlertVisible && 
      <div>
        <input class="alert-state" id="alert-5" type="checkbox" onChange={(e) => onCloseAlert(e)}/>
        <div class="alert alert-danger dismissible">
          Password Lu Salah Kocak
          <label class="btn-close" for="alert-5">X</label>
        </div>
      </div>
      }

      {/* Login Button */}
      <button class="btn-block margin-top-large" onClick={onSignup}>Register</button>
      {/* Register Button */}
      <p className='to-register'>Already have an account ? <Link to="/">Login</Link></p>
    </div>
  )
}

export default Register
