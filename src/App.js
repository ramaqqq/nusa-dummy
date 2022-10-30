import React from 'react'
import { Routes, Route } from "react-router-dom";
import Form from './components/formBiodata/Form';
import FormLogin from './components/formLogin/FormLogin';
import FormRegister from './components/formRegistration/FormRegister';
import HomePage from './pages/HomePage'
import Sidebar from './pages/Sidebar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/register" exact element={<FormRegister />} />
        <Route path="/login" exact element={<FormLogin />} />
        <Route path="/form" exact element={<Form />} />
        <Route path="/dashboard" exact element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
