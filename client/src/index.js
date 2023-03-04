import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Libraries from './pages/Libraries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBook, faDoorOpen, faHouse, faMessage, faPerson, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import License from './pages/License';
import Forum from './pages/Forum';
import Docs from './pages/Documentation';

export const roles = ["Admin", "Helper", "Developer", "User"];

const Menu = () => (
  <nav>
    <ul className='topnav'>
      <li><Link className='menu-item' to='/'><FontAwesomeIcon icon={faHouse} /> Main Page</Link></li>
      <li><Link className='menu-item' to='/Libraries'><FontAwesomeIcon icon={faPuzzlePiece} /> Libraries</Link></li>
      <li><Link className='menu-item' to='/Forum'><FontAwesomeIcon icon={faMessage} /> Forums</Link></li>
      <li><Link className='menu-item' to='/Login'><FontAwesomeIcon icon={faDoorOpen} /> Login</Link></li>
      <li><Link className='menu-item' to='/Profile'><FontAwesomeIcon icon={faPerson} /> My Profile</Link></li>
      <li><Link className='menu-item' to='/Docs'><FontAwesomeIcon icon={faBook} /> Documentation</Link></li>
      <li><Link className='menu-item' to='/License'><FontAwesomeIcon icon={faBalanceScale} /> License</Link></li>
    </ul>
  </nav>
);

const AccountControl = () => (
  <div className='flexed'>
    <Login />
    <Register />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>

    </header>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<AccountControl />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Libraries" element={<Libraries />} />
        <Route path="/License" element={<License />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Docs" element={<Docs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);