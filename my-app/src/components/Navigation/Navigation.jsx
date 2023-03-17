import {Routes,Route} from 'react-router-dom';
import Auth from '../../pages/authentication/Auth';
import Dashboard from '../../pages/dashboard/Dashboard';
import HomePage from '../../pages/homepage/HomePage';
import Notifications from '../../pages/notifications/Notifications';
import Orders from '../../pages/orders/Orders';
import Posts from '../../pages/posts/Posts';
import Profile from '../../pages/profile/Profile';
import Sales from '../../pages/sales/Sales';
import Settings from '../../pages/settings/Settings';
import Stats from '../../pages/stats/Stats';
import Users from '../../pages/users/Users';
import MainLayout from '../layout/MainLayout';

function Navigation(props) {
    return (
        <Routes >
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>} />
                <Route path='/auth' element={<Auth/>} />
                <Route path='/sales' element={<Sales/>} />
                <Route path='/posts' element={<Posts/>} />
                <Route path='/' element={<HomePage/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/notifications' element={<Notifications/>} />
                <Route path='/stats' element={<Stats/>} />
                <Route path='/orders' element={<Orders/>} />
                <Route path='/users' element={<Users/>} />
                <Route path='/settings' element={<Settings/>} />
            </Route>        
        </Routes>
    );
}

export default Navigation;