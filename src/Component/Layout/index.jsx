import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
function Layout(props) {
    return (
        <>
            <Header/>
           <div>
            <Outlet/>
           </div>

            <Footer/>
        </>
        
    );
}

export default Layout;