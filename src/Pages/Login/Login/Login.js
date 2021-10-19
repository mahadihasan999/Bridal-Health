import React from 'react';
import useAuth from './../../../hooks/useAuth';
import "./Login.css"
const Login = () => {
    const { signInUsingGoogle, handleRegistration, isLogin, handleNameChange, handleEmailChange, handlePasswordChange
        , toggleLogin, error, handleResetPassword } = useAuth();
    return (

        <body>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>

                                <form onSubmit={handleRegistration}>

                                    <h3 className="card-title text-center mb-5 fw-light fs-5">Please {isLogin ? 'Login' : 'Register'}</h3>
                                    {!isLogin && <div className="">

                                        <div className="form-floating mb-3">
                                            <input onBlur={handleNameChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Name</label>
                                        </div>

                                    </div>}
                                    <div className="">

                                        <div className="form-floating mb-3">
                                            <input onBlur={handleEmailChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingInput">Email</label>
                                        </div>
                                    </div>
                                    <div className="">

                                        <div className="form-floating mb-3">
                                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="">
                                            <div className="form-check">
                                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                                <label className="form-check-label" htmlFor="gridCheck1">
                                                    Already Registered?
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3 text-danger">{error}</div>
                                    <button type="submit" className="booking-btn  text-uppercase ">
                                        {isLogin ? 'Login' : 'Register'}
                                    </button>
                                    <button className="view-btn text-uppercase mx-3 " type="button" onClick={handleResetPassword}>Reset Password</button>
                                </form>
                                <hr />


                                <div>

                                    <div className="d-grid mb-2">
                                        <button onClick={signInUsingGoogle} className="btn btn-google btn-login text-uppercase fw-bold" >
                                            Sign in with Google
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>





    );
};

export default Login;


