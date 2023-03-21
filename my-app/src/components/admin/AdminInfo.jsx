import './AdminInfo.scss';
import profile from '../../assets/images/profile.jpg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user/UserContext';

function AdminInfo(props) {
    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext);
console.log(currentUser)
    return (
        <div className='adminInfo'  onClick={()=>navigate(`/profile/${currentUser.id}`)}>
            <span>
                <img src={profile}/>
            </span>

        </div>
    );
}

export default AdminInfo;