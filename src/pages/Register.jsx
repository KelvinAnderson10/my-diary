import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { COMMON_ERROR, FIREBASE_ERROR } from '../utils/constants/error';
import FirebaseAuthentication from '../services/firebase/FirebaseAuthentication';
import '../App.css'

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
    try {
      await FirebaseAuthentication.register(email, password)
      navigate("/");
    } catch (error) {
      if (FIREBASE_ERROR[error.code]) {
        setErrorMsg(FIREBASE_ERROR[error.code]);
      } else {
        setErrorMsg(COMMON_ERROR.INTERNAL_SERVER_ERROR);
      }
    }
  };


  return (
    <div className='paper container container-xs login-form'>
      <h3 className='page-header'>My Diary !</h3>
      <h4 className='page-title'>Sign Up</h4>
      {/* Form */}
      <div className="form-group">
        <label>Email</label>
        <input className="input-block" type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group margin-top">
        <label>Password</label>
        <input className="input-block" type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      {/* Alert */}
      {errorMsg &&
        <div className="margin-top">
          <input className="alert-state" id="alert-5" type="checkbox" onChange={(e) => onCloseAlert(e)} />
          <div className="alert alert-danger dismissible">
            {errorMsg}
            <label className="btn-close" htmlFor="alert-5">X</label>
          </div>
        </div>
      }

      {/* Register Button */}
      <button className="btn-block margin-top-large" onClick={onSignup}>Sign Up</button>
      {/* Direct to Login Link */}
      <p className='to-auth'>Already have an account ? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Register
