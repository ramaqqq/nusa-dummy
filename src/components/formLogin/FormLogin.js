import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// image 
import logo from '../../assets/images/icons/logo.png';

const api = 'http://localhost:2000/user'

const FormLogin = (props) => {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const HandleSubmit = (e) => {
        e.preventDefault();

        axios.post(api, {
            email: email,
            password: password,
        })
            .then((response) => {
                // setFormData(response.data)

                console.log(">>>>>> login", response.data)

                alert("Success")

                localStorage.setItem("email", response.data.email);

                navigate("/form")
            })
            .catch(function (error) {
                console.log(error)

                alert("Failure")
            });

    }

    return (
        <>
            <main>

                <div className="row">
                    <div className='py-5 text-center'>
                        <div className='text-center'>
                            <img src={logo} alt="Logo" className='m-2 mx-auto' />
                            <h1>NUSA DUMMY v.zero</h1>
                            <p className='lead text-center'>
                                Untuk bisa mendaftarkan Ananda, silahkan login dan
                                <p>ikuti tahapan formulir pendaftaran.</p>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row g-5 justify-content-center'>
                    <section id="login">

                        <div className="container">
                            <div className="row g-5 justify-content-center">
                                <div className="col-md-auto my-auto">
                                    {/* <img src={Img} alt="" /> */}
                                </div>
                                <div className="col-md-6 my-auto">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title">
                                            </div>
                                            <div className="card-subtitle">SignIn to your account</div>
                                            <form
                                                onSubmit={(e) => {
                                                    HandleSubmit(e);
                                                }}
                                            >
                                                <div className="mt-5 mb-3">
                                                    <label for="exampleInputEmail1" className="form-label">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        name="email"
                                                        value={email}
                                                        onChange={onChange}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label for="exampleInputPassword1" className="form-label">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                        name="password"
                                                        value={password}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                                <button type="submit" className="w-100 btn btn-danger btn-lg mb-3">
                                                    <span style={{ fontWeight: "bold", color: "#f8f8f8" }}>
                                                        Submit
                                                    </span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>






            </main>


        </>
    );
}

export default FormLogin;