//import { StrictMode } from 'react'
/*import './index.css'
import App from './App.jsx'*/
import { useState } from 'react'
import { createPortal } from 'react-dom'
//import App from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'

const navNavLinkStyle = ({isActive})=> ({
    color: isActive ? 'red' : 'blue',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal'
});

function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <p>This is the Home Page of this React App</p>
        </>
    );
}

function About() {
    return (
        <>
            <h1>About Page</h1>
            <p>This is the About Page of this React App</p>
            <nav>
                <NavLink to="/about/about-company" style={navNavLinkStyle}>Company</NavLink> | {" "}
                <NavLink to="/about/about-ceo" style={navNavLinkStyle}>CEO</NavLink>
            </nav>
            <Outlet />
        </>
    );
}

function Company(){
    return(
        <p>The company was founded on 2003 by the son of immigrant parents from India.</p>
    )
}

function Ceo(){
    return (
        <p>Viktor Strange is the CEO of the company.</p>
    )
}

function Contact() {
    return (
        <>
            <h1>Contact Page</h1>
            <p>This is the Contact Page of this React App</p>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <nav>
                <NavLink to="/" style={navNavLinkStyle}>Home</NavLink> |{" "}
                <NavLink to="/about" style={navNavLinkStyle}>About</NavLink> |{" "}
                <NavLink to="/contact" style={navNavLinkStyle}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}>
                    <Route path='about-company' element={<Company />} />
                    <Route path='about-ceo' element={<Ceo />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

createRoot(document.getElementById('root')).render(
    <App />
)
