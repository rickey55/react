import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import Img from "./assets/result.svg"
import { ErrorMessage, Formik, Form, Field } from "formik";
import "./css/login.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";


function App() {
  const [useremail, setUseremail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const renderErrorMessage = () =>
  (
    <div className="error">{errorMessages.message}</div>
  );
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

  const errors = {
    username: "invalid username",
    password: "invalid password"
  };

  const handleLogin = (e) => {
    //Prevent page reload
    e.preventDefault();

    console.log('user', username)
    console.log('password', password)
    const userData = database.find((user) => user.username === username && user.password === password);
    if (userData) {
      setIsSubmitted(true);
      // navigate('/')
    } else {
      // not found
      setErrorMessages({ name: "username", message: errors.username });
      setIsSubmitted(false);
    }
  };

  const handleUseremail = (e) => {
    setUseremail(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    // <div className="body">
    //   <div className="left-login">
    //     <img src={Img} alt="Pessoas olhando gráficos" className="chart" />
    //   </div>

    //   <div className="right-login">
    //     <div className="card-login">
    //       <div className="user-links">
    //       </div>
    //       <h1>LOGIN</h1>
    //       <Formik
    //         initialValues={{}}
    //         onSubmit={handleLogin}
    //        >
    //         <Form className="login-form">
    //           <div className="form-group">
    //             <label form="email">Account</label>

    //             <Field name="email" type='text' value={username} className="form-field" placeholder="Email" />

    //             <ErrorMessage
    //               component="span"
    //               name="email"
    //               className="form-error"
    //             />
    //           </div>

    //           {/*Outro campo*/}

    //           <div className="form-group">
    //             <label form="email">Password</label>
    //             <Field name="password" type='password' value={password} onChange={handlePassword} className="form-field" placeholder="Senha" />

    //             <ErrorMessage
    //               component="span"
    //               name="password"
    //               className="form-error"
    //             />
    //           </div>

    //           <button className="button" type="submit" onClick={handleLogin}>
    //             ENTRAR
    //           </button>
    //         </Form>
    //       </Formik>
    //       <div>{isSubmitted ? "登入成功" : "登入失敗"}</div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
