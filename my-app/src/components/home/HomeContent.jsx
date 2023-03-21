import './HomeContent.scss'
import SimpleChart from '../charts/SimpleChart';
import PieChart from '../charts/PieChart';
import CustomDataTable from '../table/CustomDataTable';
import HomeFooter from './HomeFooter';

function HomeContent(props) {
    
    return (
        <div className="Content-container">
            <HomeFooter/>
        <div className='home-chart-container'>
            <div className='home-chart'>
                <h1>Sales & Orders</h1>
            <SimpleChart/>
            </div>
            <div className='home-chart'>
            <h1>Total Income</h1>
            <PieChart/>
            </div>
        </div>
        </div>
    );
}

export default HomeContent;