import React from 'react';
import './LandingPage.css'

// image
import logo from '../assets/images/icons/logo.png';
import bg from '../assets/images/bg/home-bg.png';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <>
            {/* Navbar START  */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        {/* <img src="assets/images/logo-saim.png" alt="" /> */}
                        <img src={logo} alt="Logo" />
                        {/* <span>Sekolah Adab Insan Mulia</span> */}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-3">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                            <a className="nav-link" href="#">
                                Program
                            </a>
                            <a className="nav-link" href="#">
                                Wakaf
                            </a>
                            <a className="nav-link" href="#">
                                Gallery
                            </a>
                            <a className="nav-link">Blog</a>
                        </div>
                        {/* <div className="menu-auth text-center mt-4 mt-lg-0">
                            <a className="me-4 btn-login d-block d-lg-inline" href="#">
                                Login
                            </a>
                            <a className="me-4 btn-login d-block d-lg-inline" href="#">
                                Register
                            </a>
                            <a
                                className="btn-first btn-register d-block d-lg-inline mt-5 mt-lg-0"
                                href="#"
                            >
                                Register Now
                            </a>
                        </div> */}
                    </div>
                </div>
            </nav>
            {/* Navbar End  */}

            {/* Home start  */}
            <section className="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mt-4">
                            {/* <span>Hallo, Ayah/Bunda.</span> */}
                            <h1 className="heading-home">
                                {/* <span>Hallo, Ayah/Bunda.</span> */}
                                Segera <span className="prop">daftarkan Ananda</span> di Sekolah Adab Insan Mulia!
                            </h1>
                            <p className="seubheading-home mt-3">
                                <span className="hub">Sekolah Adab - Ilmu - Amal</span>
                            </p>
                            <div className="btn-home text-center text-lg-start">
                                <Link className="btn-first d-block d-lg-inline" to="/login">
                                    Login
                                </Link>
                                <Link
                                    className="btn-second ms-0 ms-lg-4 d-block d-lg-inline mt-4 mt-lg-0"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-home mt-5 mx-auto mt-lg-0 mx-lg-0">
                                {/* <img src="assets/images/home-bg.png" alt="" className="img-fluid" /> */}
                                <img src={bg} alt="Bg" className='mt-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Home End  */}


        </>

    );
}

export default HomePage;