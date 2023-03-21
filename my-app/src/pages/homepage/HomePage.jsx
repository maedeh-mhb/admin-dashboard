import './HomePage.scss';
import HomeContent from '../../components/home/HomeContent';
import HomeHeader from '../../components/home/HomeHeader';
import HomeFooter from '../../components/home/HomeFooter';

function HomePage(props) {
    return (
        <div className='home-container'>
            
            <HomeHeader/>
            <HomeContent/>
        </div>
    );
}

export default HomePage;