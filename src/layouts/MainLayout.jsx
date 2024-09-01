import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/shared/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;