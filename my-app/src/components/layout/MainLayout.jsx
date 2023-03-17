import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import SideBar from '../sideBar/SideBar';
import classes from './MainLayout.module.scss';

function MainLayout(props) {
    return (
        <>
        <div className={classes['main-container']}>
            <SideBar/>     
        <div className={classes['inner-container']}>
            <Navbar/>
            <Outlet/>
        </div>
        </div>
        </>
    );
}

export default MainLayout;