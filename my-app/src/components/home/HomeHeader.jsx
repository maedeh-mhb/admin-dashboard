import Widget from '../widgets/Widget';
import './HomeHeader.scss'
import GroupIcon from '@mui/icons-material/Group';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function HomeHeader(props) {

    const widgData = [
        {
            id:1,
            title:'Users',
            total:'3k',
            progress: '30',
            status:'increase',
            icon: <GroupIcon/>
        },
        {
            id:2,
            title:'Orders',
            total:'200',
            progress: '10',
            status:'decrease',
            icon: <ListAltIcon/>
        },
        {
            id:3,
            title:'Sales',
            total:'20',
            progress: '22',
            status:'increase',
            icon: <AttachMoneyIcon/>
        },
    ];

    return (
        <>
        <div className='home-header'>
             
           {
            widgData.map((data)=><Widget {...data} key={data.id}/>)
           }
        </div>
        </>
    );
}

export default HomeHeader;