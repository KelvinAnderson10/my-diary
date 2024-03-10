import { useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import { firebaseAuth } from './firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [isAlertVisible, SetIsAlertVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const onCloseAlert = (e) => {
    if (e.target.checked) {
      SetIsAlertVisible(false)
    }
  }

  const onSignup = async () => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Success Sign Up
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error msg", errorMessage);
        // TODO: Handle error gracefully
      });
  };
  

  return (
    <div className='paper container container-xs login-form'>
      <h3 className='page-header'>Buku Harianku !</h3>
      <h4 className='page-title'>Sign Up</h4>
      {/* Form */}
      <div className="form-group">
        <label>Email</label>
        <input className="input-block" type="text" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input className="input-block" type="password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      {/* Alert */}
      {isAlertVisible && 
      <div>
        <input className="alert-state" id="alert-5" type="checkbox" onChange={(e) => onCloseAlert(e)}/>
        <div className="alert alert-danger dismissible">
          Password Lu Salah Kocak
          <label className="btn-close" for="alert-5">X</label>
        </div>
      </div>
      }

      {/* Register Button */}
      <button className="btn-block margin-top-large" onClick={onSignup}>Sign Up</button>
      {/* Direct to Login Link */}
      <p className='to-register'>Already have an account ? <Link to="/">Login</Link></p>
    </div>
  )
}

export default Register
