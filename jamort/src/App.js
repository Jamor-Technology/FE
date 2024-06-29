import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import VerifyEmail from './screens/VerifyEmail';
import ChooseNewPassword from './screens/ChooseNewPassword';
import ResetPasswordSuccess from './screens/ResetPasswordSuccess';
import OurServices from './screens/OurServices';
import './variables.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/choose-new-password" element={<ChooseNewPassword />} />
        <Route path="/reset-password-success" element={<ResetPasswordSuccess />} />
        <Route path="/our-services" element={<OurServices />} />
      </Routes>
    </Router>
  );
}

export default App;
