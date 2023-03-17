import {NavLink} from 'react-router-dom';
import classes from './SideBar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MediaQuery from 'react-responsive'
import MobileSideBar from './MobileSideBar';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/themeContext/darkModeContext';





function SideBar(props) {
    const{setDark,isDark} = useContext(DarkModeContext);


    return (
        <div className='side-container'>
            <h1 className='side-title'>NovaDev</h1>
            <div className='side-desktop'>
            <main>
            <p>Main</p>
            <NavLink to={'/'}>
                <DashboardIcon className='side-icon'/>
                <span>Dashboard</span>
            </NavLink>
            <p>LISTS</p>
                <NavLink to={'/users'} className={({isActive})=>isActive ? 'active' : null}>
                    <GroupIcon className='side-icon'/>
                    <span>Users</span>
                </NavLink>
                <NavLink to={'/posts'}>
                    <DynamicFeedIcon className='side-icon'/>
                    <span>Posts</span>
                </NavLink>
                <NavLink to={'/orders'}>
                    <ListAltIcon className='side-icon'/>
                    <span>Orders</span>
                </NavLink>
            <p>USEFULS</p>
                <NavLink to={'/stats'}>
                    <BarChartIcon className='side-icon'/>
                    <span>Stats</span>
                </NavLink>
                <NavLink to={'/notifications'}>
                    <NotificationsIcon className='side-icon'/>
                    <span>Notifications</span>
                </NavLink>
            
            <p>USER</p>
                <NavLink to={'/profile'}>
                    <AccountCircleIcon className='side-icon'/>
                    <span>Profile</span>
                </NavLink>
                <NavLink to={'/auth'}>
                    <LogoutIcon className='side-icon'/>
                    <span>Log Out</span>
                </NavLink>  
             <p>THEMES</p>
                <div className='theme-container'>
                   <span onClick={()=>setDark('LIGHT_MODE')}></span>
                   <span onClick={()=>setDark('DARK_MODE')}></span>
                </div>   
            </main>
            </div>
            <div className='side-mobile'>
                <MobileSideBar/>
            </div>
 
           
     
        </div>
    );
}

export default SideBar;