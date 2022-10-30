import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import axios from 'axios';

import './Sidebar.style.css';

const Sidebar = () => {
    const [show, setShow] = useState(false);

    const [formData, setFormData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios
                .get('http://localhost:2000/user')
                .then((response) => {
                    console.log("data >>>>>", response.data);
                    console.log(response.data)

                    setFormData(response.data)
                })

            // console.log(response);
        } catch (error) {
            console.error(error.message)
        }
    }

    const onSearch = (e) => {
        let search = e.target.value;

        if (search === "") getData()

        const dataSearch = formData.filter((e) =>
            e.username.toLocaleLowerCase().includes(search.toLocaleLowerCase())

        )
        setFormData(dataSearch);
        console.log(search, "<<< search")

    }

    const columns = [
        {
            name: <span style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>No</span>,
            selector: (item, i) => (
                <span style={{ fontSize: "15px", color: "black" }}>{i + 1}</span>
            ),
            // sortable: true,
        },
        {
            name: (
                <span style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
                    Wali
                </span>
            ),
            selector: (item) => `${item.wali}`,
            sortable: true,
        },
        {
            name: (
                <span style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
                    Username
                </span>
            ),
            selector: (item) => `${item.username}`,
            sortable: true,
        },
        {
            name: (
                <span style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
                    Jumlah Anak
                </span>
            ),
            selector: (item) => `${item.jumlahanak}`,
            sortable: true,
        },
        {
            name: (
                <span style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
                    Tempat Lahir
                </span>
            ),
            selector: (item) => `${item.tempatlahir}`,
            sortable: true,
        },
        {
            name: (
                <span style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
                    Tanggal Lahir
                </span>
            ),
            selector: (item) => `${item.tanggallahir}`,
            sortable: true,
        },
        {
            name: (
                <span style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
                    Alamat Lengkap
                </span>
            ),
            selector: (item) => `${item.alamatlengkap}`,
            sortable: true,
        },
        {
            name: (
                <span style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
                    Email
                </span>
            ),
            selector: (item) => `${item.email}`,
            sortable: true,
        },

    ];

    useEffect(() => {
        getData()
    }, [])

    return (
        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
                </div>
                <div className='header-horizontal'>
                    <i className="fa-solid fa-user">
                        <span> &nbsp; Admin</span>
                    </i>
                    {/* <h1>NUSA</h1> */}
                </div>
            </header>

            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className='nav'>
                    <div>
                        <Link to='/' className='nav-logo'>
                            <i className={`fas fa-home-alt nav-logo-icon`}></i>
                            <span className='nav-logo-name'>Homepage</span>
                        </Link>

                        <div className='nav-list'>
                            <Link to='/dashboard' className='nav-link active'>
                                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                                <span className='nav-link-name'>Dashboard</span>
                            </Link>
                            <Link to='/dashboard' className='nav-link'>
                                <i className='fas fa-hotel nav-link-icon'></i>
                                <span className='nav-link-name'>KBM</span>
                            </Link>
                            <Link to='/pmb' className='nav-link'>
                                <i className='fas fa-image nav-link-icon'></i>
                                <span className='nav-link-name'>PMB</span>
                            </Link>
                            <Link to='/dashboard' className='nav-link'>
                                <i className='fas fa-dollar-sign nav-link-icon'></i>
                                <span className='nav-link-name'>Transaction</span>
                            </Link>
                        </div>
                    </div>

                    <Link to='/' className='nav-link'>
                        <i className='fas fa-sign-out nav-link-icon'></i>
                        <span className='nav-link-name'>Logout</span>
                    </Link>
                </nav>
            </aside>

            {/* <h1 className='mt-5'>Content</h1> */}

            <br />
            <br />

            <div className="container">
                <div class="row">


                    <div className='col-12'>
                        <div className="row">

                            {/* <span className="navbar-text">Hi ACER</span> */}
                            <div className="card">
                                <div className="card-body">

                                    <DataTable
                                        title={
                                            <h2 className="display-8">
                                                <span style={{ fontWeight: "bold" }}>
                                                    Report Akun
                                                </span>
                                            </h2>
                                        }
                                        columns={columns}
                                        data={formData}
                                        pagination
                                        fixedHeader
                                        fixedHeaderScrollHeight="500px"
                                        // selectableRows
                                        // selectableRowsHighlight
                                        highlightOnHover
                                        // actions={
                                        //     <span>
                                        //         <Link
                                        //             to="/grafik"
                                        //             style={{ textDecoration: "none" }}
                                        //             className="btn btn-info"
                                        //         >
                                        //             Grafik
                                        //         </Link>

                                        //     </span>
                                        // }
                                        subHeader
                                        subHeaderComponent={
                                            <form className="d-flex" role="search">
                                                <input
                                                    className="form-control me-2"
                                                    type="text"
                                                    placeholder="Search here..."
                                                    onChange={onSearch}
                                                />
                                            </form>
                                        }
                                        subHeaderAlign="left"
                                    />

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </main>
    );
};

export default Sidebar;