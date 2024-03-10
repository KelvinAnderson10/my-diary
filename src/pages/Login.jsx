import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'

const Login = () => {
    const [isAlertVisible, SetIsAlertVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onClickLogin = () => {
        // TODO: Add firebase login method
        // SetIsAlertVisible(true)
        navigate("/home");
    };

    const onCloseAlert = (e) => {
        if (e.target.checked) {
            SetIsAlertVisible(false);
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
            <div className="form-group">
                <label>Password</label>
                <input
                    className="input-block"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {/* Alert */}
            {isAlertVisible && (
                <div>
                    <input
                        className="alert-state"
                        id="alert-5"
                        type="checkbox"
                        onChange={(e) => onCloseAlert(e)}
                    />
                    <div className="alert alert-danger dismissible">
                        Incorrect email or password.
                        <label className="btn-close" for="alert-5">
                            X
                        </label>
                    </div>
                </div>
            )}

            {/* Login Button */}
            <button className="btn-block margin-top-large" onClick={onClickLogin}>
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

