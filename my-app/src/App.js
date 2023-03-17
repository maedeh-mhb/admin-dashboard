
import { useContext } from 'react';
import Navigation from './components/Navigation/Navigation';
import { DarkModeContext } from './context/themeContext/darkModeContext';
import './index.scss';


 
function App() {
  const {isDark} =  useContext(DarkModeContext);

  return (
    <div className={`${isDark && 'dark'}`}>
      <Navigation/>
    </div>
  );
}

export default App;
