import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import GroupIcon from '@mui/icons-material/Group';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';


function MobileSideBar(props) {
    return (
        <main>
            <p>Main</p>
            <NavLink to={'/'}>
                <DashboardIcon className='side-icon'/>
            </NavLink>
            <p>LISTS</p>
                <NavLink to={'/users'} className={({isActive})=>isActive ? 'active' : null}>
                    <GroupIcon className='side-icon'/>
                </NavLink>
                <NavLink to={'/posts'}>
                    <DynamicFeedIcon className='side-icon'/>
                </NavLink>
                <NavLink to={'/orders'}>
                    <ListAltIcon className='side-icon'/>
                </NavLink>
            <p>USEFULS</p>
                <NavLink to={'/stats'}>
                    <BarChartIcon className='side-icon'/>
                </NavLink>
                <NavLink to={'/notifications'}>
                    <NotificationsIcon className='side-icon'/>
                </NavLink>     
            <p>USER</p>
                <NavLink to={'/profile'}>
                    <AccountCircleIcon className='side-icon'/>
                </NavLink>
                <NavLink to={'/auth'}>
                    <LogoutIcon className='side-icon'/>
                </NavLink>  
             <p>THEMES</p>
                <div className='theme-container'>
                   <span></span>
                   <span></span>
                </div>   
            </main>
    );
}

export default MobileSideBar;