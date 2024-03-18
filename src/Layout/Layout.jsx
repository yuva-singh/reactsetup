import React from 'react'
import Navbar from '../components/Navabr/Navbar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const isLoginScreen = location.pathname === '/login';
  return (
    <>
     {!isLoginScreen && <Navbar />}
      <Outlet />
    </>
  )
}

export default Layout