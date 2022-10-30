import axios from 'axios';
import React, { useState } from 'react';
import { Await, Link, useNavigate } from 'react-router-dom';

// image 
import logo from '../../assets/images/icons/logo.png';

const FormRegister = () => {

    const [user] = useState(localStorage.getItem("email"));

    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        wali: "",
        username: "",
        jumlahanak: "",
        tempatlahir: "",
        tanggallahir: "",
        alamatlengkap: "",
        email: "",
        password: "",
        konfirmasipassword: "",

    });

    const { wali, username, jumlahanak, tempatlahir, tanggallahir, alamatlengkap, email, password, konfirmasipassword } = formData;

    const onInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:2000/user', formData)
            .then((response) => {

                console.log(">>>>>> posttt", response.data)

                alert("Success")

                navigate("/dashboard")

            })
            .catch(function (error) {
                console.log(error)

                alert("Failure")
            })
    }



    return (
        <>

            <div className="row">

                <div className='py-5 text-center'>
                    <div className='text-center'>
                        <img src={logo} alt="Logo" className='m-2 mx-auto' />
                        <h1>NUSA DUMMY v.zero</h1>
                    </div>
                </div>


                {/* <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Pendaftaran Murid
                        </a>
                        <a className="navbar-brand" href="#">
                            Pendataan Ortu
                        </a>
                        <a className="navbar-brand" href="#">
                            Pendataan Wali Murid
                        </a>
                    </div>
                </nav> */}
            </div>

            <div className="container mt-5 mb-5">
                <div class="row">

                    <span>Hallo {user}</span>
                    <div className='col-12'>
                        <div className="row">

                            {/* <span className="navbar-text">Hi ACER</span> */}
                            <div className="card">
                                <div className="card-body">

                                    <Link className="btn btn-success mb-4" to="/">
                                        <span style={{ fontWeight: 'bold', color: '#f8f8f8' }}>
                                            back to HomePage
                                        </span>
                                    </Link>

                                    <h2 className="text-center mb-5">FORM DAFTAR AKUN</h2>

                                    <form
                                        className="row g-3"
                                        onSubmit={e => onSubmit(e)}
                                    >

                                        <div className='col-md-4'>
                                            <label for="inputPassword4" className="form-label">
                                                Pilih Wali:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="wali"
                                                required
                                                value={wali}
                                                onChange={e => onInputChange(e)}
                                            />
                                        </div>

                                        {/* <div className='col-md-4'>
                                            <label for="inputPassword4" className="form-label">
                                                Nama Wali:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="username"
                                                required
                                                value={username}
                                                onChange={e => onInputChange(e)}
                                            />
                                        </div> */}

                                        <div className='col-md-4'>
                                            <label for="inputPassword4" className="form-label">
                                                Daftar Jumlah Anak:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="jumlahanak"
                                                required
                                                value={jumlahanak}
                                                onChange={e => onInputChange(e)}
                                            />
                                        </div>

                                        <div className='col-md-4'>
                                            <label for="inputPassword4" className="form-label">
                                                Tempat Lahir:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="tempatlahir"
                                                required
                                                value={tempatlahir}
                                                onChange={e => onInputChange(e)}
                                            />
                                        </div>

                                        <div className='col-md-4'>
                                            <label for="inputPassword4" className="form-label">
                                                Tanggal Lahir:
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="tanggallahir"
                                                required
                                                value={tanggallahir}
                                                onChange={e => onInputChange(e)}
                                            />
                                        </div>

                                        <div className='col-md-4'>
                                            <label for="inputPassword4" className="form-label">
                                                Alamat Lengkap:
                                            </label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                name="alamatlengkap"
                                                required
                                                value={alamatlengkap}
                                                onChange={e => onInputChange(e)}
                                            />
                                        </div>

                                        <hr className='mb-3 mt-5' />

                                        <div className='col-md-4'>
                                            <label for="inputPassword4" className="form-label">
                                                Email:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                required
                                                value={email}
                                                onChange={e => onInputChange(e)}
                                            />
                                        </div>

                                        <div className='col-md-4'>
                                            <label for="inputPassword4" className="form-label">
                                                Masukan Password:
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                required
                                                value={password}
                                                onChange={e => onInputChange(e)}
                                            />
                                        </div>

                                        <div className='col-md-4'>
                                            <label for="inputPassword4" className="form-label">
                                                Masukan Ulang Password:
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="konfirmasipassword"
                                                required
                                                value={konfirmasipassword}
                                                onChange={e => onInputChange(e)}
                                            />
                                        </div>


                                        <div></div>

                                        <button
                                            type="submit"
                                            className="btn btn-danger me-2"
                                        // onClick={onSubmit}
                                        >
                                            SAVE
                                        </button>

                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}

export default FormRegister;