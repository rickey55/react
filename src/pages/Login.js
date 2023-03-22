import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Img from "../assets/result.svg"
import { ErrorMessage, Formik, Form, Field } from "formik";
import "../css/login.css"


function Login() {
    const [username, setUsername] = useState("sa");
    const [password, setPassword] = useState("sa");
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "sa",
            password: "sa"
        },
        {
            username: "1",
            password: "1"
        }
    ];


    const handleLogin = (e) => {
        //Prevent page reload
        e.preventDefault();

        console.log('user', username)
        console.log('password', password)
        const userData = database.find((user) => user.username === username && user.password === password);
        if (userData) {
            setIsSubmitted(true);
            navigate('/react')
        } else {
            // not found
            setIsSubmitted(false);
        }
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className="body">
            <div className="left-login">
                <img src={Img} alt="Pessoas olhando gráficos" className="chart" />
            </div>

            <div className="right-login">
                <div className="card-login">
                    <div className="user-links">
                    </div>
                    <h1>LOGIN</h1>
                    <Formik
                        initialValues={{}}
                        onSubmit={handleLogin}
                    >
                        <Form className="login-form">
                            <div className="form-group">
                                <label form="email">Account</label>
                                <Field value={username} onChange={handleUsername} className="form-field" placeholder="Account" />

                                <ErrorMessage
                                    component="span"
                                    name="email"
                                    className="form-error"
                                />
                            </div>

                            {/*Outro campo*/}

                            <div className="form-group">
                                <label form="email">Password</label>
                                <Field name="password" type='password' value={password} onChange={handlePassword} className="form-field" placeholder="Senha" />

                                <ErrorMessage
                                    component="span"
                                    name="password"
                                    className="form-error"
                                />
                            </div>

                            <button className="button" type="submit" onClick={handleLogin}>
                                ENTRAR
                            </button>
                        </Form>
                    </Formik>
                    <div>{isSubmitted ? "登入成功" : "登入失敗"}</div>
                </div>
            </div>
        </div>
    );
}

export default Login;
