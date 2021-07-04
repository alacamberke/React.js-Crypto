import React from 'react';
import Navbar from '../Components/Navbar';
import './Layout.css';

const Layout = (props) => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="middle">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout
