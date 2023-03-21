import LanguageIcon from '@mui/icons-material/Language';
import NightlightIcon from '@mui/icons-material/Nightlight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useState,useEffect } from 'react';
import { DarkModeContext } from '../../context/themeContext/darkModeContext';
import HamburgerMenu from '../../menu/HamburgerMenu';
import AdminInfo from '../admin/AdminInfo';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchInput from '../inputs/SearchInput';
import './NavBar.scss';


function Navbar(props) {
    const {isDark,setDark} = useContext(DarkModeContext);
    const [navBar,setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 70) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      };

      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    

    return (
        <div className={`nav-container ${navBar && 'active-nav'}`}>
            <div style={{ margin: '0.1rem auto',width: '85%', display: 'flex', alignItems: 'center'}}>
            <SearchInput
            placeholder="Search..."/>
            <div className={'nav-icons'}>
                <Tooltip title="Language">
                <span className={'nav-lan nav-icon'}>
                    <LanguageIcon/>
                    <p>English</p>
                </span>
                </Tooltip>
                <Tooltip title="Theme">
                    <span className={'nav-icon'} onClick={()=>setDark('TOGGLE')}>
                        {
                            isDark ? <WbSunnyIcon/> :  <NightlightIcon/>
                        }       
                    </span>
                </Tooltip>
                <Tooltip title="Notifications">
                <span className={'nav-icon'}>
                    <Badge badgeContent={1} color="error" sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 } }}>
                       <NotificationsIcon/>
                    </Badge>
                </span>
                </Tooltip>
                <Tooltip title="Maedeh">
                <span >
                   <AdminInfo/>
                </span>
                </Tooltip>
            </div>
            <div className='nav-menu'>
                <HamburgerMenu/>
            </div>
            </div>
          
        </div>
    );
}

export default Navbar;