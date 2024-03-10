import { useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import { firebaseAuth } from './firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { COMMON_ERROR, FIREBASE_ERROR } from './constants/error';

function Register() {
  const navigate = useNavigate();

  // Hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onCloseAlert = (e) => {
    if (e.target.checked) {
      setErrorMsg('')
    }
  }

  const onSignup = async () => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        if (FIREBASE_ERROR[error.code]) {
          setErrorMsg(FIREBASE_ERROR[error.code]);
      } else {
          setErrorMsg(COMMON_ERROR.INTERNAL_SERVER_ERROR);
      }
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
      {errorMsg && 
      <div>
        <input className="alert-state" id="alert-5" type="checkbox" onChange={(e) => onCloseAlert(e)}/>
        <div className="alert alert-danger dismissible">
          {errorMsg}
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
