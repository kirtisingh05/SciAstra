import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import PaymentPage from './components/PaymentPage';
import Signup from './components/Signup';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
         <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/admin" element={isLoggedIn ? <AdminDashboard /> : <AdminLogin onLogin={handleLogin} />} />
                <Route path="/payment" element={<PaymentPage />} />
            </Routes>
        </Router>
    );
}

export default App;