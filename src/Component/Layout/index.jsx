import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
function Layout(props) {
    const {title,children}=props
    return (
        <>
            <Header/>
            <h1>{title}</h1>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;