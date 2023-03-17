import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './PieChart.scss';
import { ResponsiveContainer } from 'recharts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function PieChart(props) {
    const percentage = 66;                                        
    return (
        <ResponsiveContainer aspect={2}>
                    <div className='pie-chart-container'>
            <div className='pie-chart'>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            <div className='pie-total'>
            <span>Total Income Up Untill Today</span>
            <h1>$ 240</h1>
            </div>
            <div className='pie-footer'>
                <span className='pie-footer-item '>
                    <p className='pie-decrease'>$ 12.4 <ArrowDropDownIcon className='pie-footer-icon'/></p>
                    <p>Last Week</p>
                </span>
                <span className='pie-footer-item '>
                    <p className='pie-increase'>$ 32.5 <ArrowDropUpIcon className='pie-footer-icon'/></p>
                    <p>Last Month</p>
                </span>
                
            </div>
        </div>
        </ResponsiveContainer>

    );
}

export default PieChart;