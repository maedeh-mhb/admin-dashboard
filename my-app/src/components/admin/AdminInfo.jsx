import './AdminInfo.scss';
import profile from '../../assets/images/profile.jpg';
import { useNavigate } from 'react-router-dom';

function AdminInfo(props) {
    const navigate = useNavigate();

    return (
        <div className='adminInfo'  onClick={()=>navigate('/profile')}>
            <span>
                <img src={profile}/>
            </span>
            <span>
                <p>Maedeh</p>
                <p>FE Developer</p>
            </span>
        </div>
    );
}

export default AdminInfo;