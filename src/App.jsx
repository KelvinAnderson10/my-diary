import { useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'


function App() {
  const [isAlertVisible, SetIsAlertVisible] = useState(false)
  const navigate = useNavigate();

  const onClickLogin = () => {
    // SetIsAlertVisible(true)
    navigate("/home");
  }

  const onCloseAlert = (e) => {
    if (e.target.checked) {
      SetIsAlertVisible(false)
    }
  }

  return (
    <div className='paper container container-xs login-form'>
      <h3 className='page-header'>Buku Harianku !</h3>
      <h4 className='page-title'>Login</h4>
      {/* Form */}
      <div className="form-group">
        <label>Email</label>
        <input className="input-block" type="email"/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input className="input-block" type="password"/>
      </div>
      {/* Alert */}
      {isAlertVisible && 
      <div>
        <input className="alert-state" id="alert-5" type="checkbox" onChange={(e) => onCloseAlert(e)}/>
        <div className="alert alert-danger dismissible">
          Incorrect email or password.
          <label className="btn-close" for="alert-5">X</label>
        </div>
      </div>
      }

      {/* Login Button */}
      <button className="btn-block margin-top-large" onClick={onClickLogin}>Login</button>
      {/* Register Button */}
      <p className='to-register'>No account yet ? <Link to="/register">Sign Up</Link></p>
    </div>
  )
}

export default App
