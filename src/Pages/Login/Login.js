import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import "./Login.css"

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, navigate)

    }

    return (
        <div className="d-flex justify-content-center flex-column" style={{
            marginTop: "3.0rem"
        }}>
            <h1 style={{
                fontSize: "50px"
            }}>Hey Welcome to <br />
                <span className="textCusColor"> Movie Dream Watch</span></h1>
            <div style={{
                marginTop: "4.2rem",
                backgroundColor: "rgb(230, 230, 230)",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                borderRadius: "10px 30px"
            }}>
                <h2 className="text-black fw-bold">Please Log In to Continue</h2>
                <button onClick={handleGoogleSignIn} className="CustomButton1">Google Log In</button>
            </div>
        </div>
    );
};

export default Login;