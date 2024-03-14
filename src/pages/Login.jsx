import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'
import FirebaseAuthentication from "../services/firebase/FirebaseAuthentication";
import { COMMON_ERROR, FIREBASE_ERROR } from "../utils/constants/error";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const onCloseAlert = (e) => {
        if (e.target.checked) {
            setErrorMsg('')
        }
    }

    const onLogin = async () => {
        try {
            await FirebaseAuthentication.login(email, password)
            navigate("/");
        } catch (error) {
            console.log(error);
            if (FIREBASE_ERROR[error.code]) {
                setErrorMsg(FIREBASE_ERROR[error.code]);
            } else {
                setErrorMsg(COMMON_ERROR.INTERNAL_SERVER_ERROR);
            }
        }
    };

    return (
        <div className="paper container container-xs login-form">
            <h3 className="page-header">Buku Harianku !</h3>
            <h4 className="page-title">Login</h4>
            {/* Form */}
            <div className="form-group">
                <label>Email</label>
                <input
                    className="input-block"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group margin-top">
                <label>Password</label>
                <input
                    className="input-block"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {/* Alert */}
            {errorMsg && (
                <div className="margin-top">
                    <input
                        className="alert-state"
                        id="alert-5"
                        type="checkbox"
                        onChange={(e) => onCloseAlert(e)}
                    />
                    <div className="alert alert-danger dismissible">
                        {errorMsg}
                        <label className="btn-close" htmlFor="alert-5">
                            X
                        </label>
                    </div>
                </div>
            )}
            {/* Login Button */}
            <button className="btn-block margin-top-large" onClick={onLogin}>
                Login
            </button>
            {/* Direct to Register Link */}
            <p className="to-auth">
                No account yet ? <Link to="/register">Sign Up</Link>
            </p>
        </div>
    );
}

export default Login

