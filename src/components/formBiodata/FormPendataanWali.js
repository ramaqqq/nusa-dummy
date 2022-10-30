import React from 'react';

const FormPendataanWali = () => {
    return (
        <>

            <h2 className="text-center mb-5">FORM PENDATAAN WALI</h2>

            <form
                className="row g-3"
            // onSubmit={e => onSubmit(e)}
            >

                <div className='col-md-4'>
                    <label for="inputPassword4" className="form-label">
                        Nama Lengkap Wali:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="customer"
                    />
                </div>

                <div className='col-md-4'>
                    <label for="inputPassword4" className="form-label">
                        Nomor Ponsel Wali:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="customer"
                    />
                </div>

                <div className='col-md-4'>
                    <label for="inputPassword4" className="form-label">
                        Alamat Tempat Tinggal Wali:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="customer"
                    />
                </div>

                <div className='col-md-4'>
                    <label for="inputPassword4" className="form-label">
                        Tempat Lahir Wali:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="customer"
                    />
                </div>

                <div className='col-md-4'>
                    <label for="inputPassword4" className="form-label">
                        Tanggal Lahir Wali:
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        name="customer"
                    />
                </div>

                <div className='col-md-4'>
                    <label for="inputPassword4" className="form-label">
                        Pendidikan Terakhir:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="customer"
                    />
                </div>

                <div className='col-md-4'>
                    <label for="inputPassword4" className="form-label">
                        Nama Perusahaan tempat Wali Bekerja:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="customer"
                    />
                </div>

                <div className='col-md-4'>
                    <label for="inputPassword4" className="form-label">
                        Posisi / Jabatan:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="customer"
                    />
                </div>

                <div className='col-md-4'>
                    <label for="inputPassword4" className="form-label">
                        Penghasilan Wali Setiap Bulan:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="customer"
                    />
                </div>


                <div></div>

            </form>
        </>
    );
}

export default FormPendataanWali;