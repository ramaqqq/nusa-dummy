import React, { useState } from 'react';
import FormPendataanOrtu from './FormPendataanOrtu';
import FormPendataanWali from './FormPendataanWali';
import FormPendataranMurid from './FormPendaftaranMurid';


// image 
import logo from '../../assets/images/icons/logo.png';


const Form = () => {

    const [page, setPage] = useState(1);

    const nextPage = () => {
        const nextPage = page + 1;
        setPage(nextPage);
    }

    const backPage = () => {
        const backPage = page - 1;
        setPage(backPage);
    }

    const onSubmit = () => {

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

                <hr className="mb-3" />
            </div>

            <div className="container mb-5">
                <div class="row">


                    <div className='col-12'>
                        <div className="row">

                            <div className="card">
                                <div className="card-body">
                                    {/* <h2 className="text-center mb-5">FORM PENDAFTARAN MURID</h2> */}

                                    {
                                        page === 1 ? <FormPendataranMurid /> : page === 2 ? <FormPendataanOrtu /> : <FormPendataanWali />
                                    }

                                    <div className='mt-lg-0 mt-3'>
                                        {
                                            page > 1 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger me-2"
                                                    onClick={backPage}
                                                >
                                                    BACK
                                                </button>
                                            )
                                        }

                                        {
                                            page < 3 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger me-2"
                                                    onClick={nextPage}
                                                >
                                                    NEXT
                                                </button>

                                            )
                                        }

                                        {
                                            page === 3 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger me-2"
                                                    onClick={onSubmit}
                                                >
                                                    SAVE
                                                </button>
                                            )
                                        }


                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}

export default Form;