
import { useContext } from 'react';
import Navigation from './components/Navigation/Navigation';
import { DarkModeContext } from './context/themeContext/darkModeContext';
import { UserContext } from './context/user/UserContext';
import Auth from './pages/authentication/Auth.jsx';

import './index.scss';


 
function App() {
  const {isDark} =  useContext(DarkModeContext);
  const {currentUser} = useContext(UserContext);

  return (
    <div className={`${isDark && 'dark'}`}>
      {
       currentUser.userName ? <Navigation/> :  <Auth/>
      }
     
    </div>
  );
}

export default App;
