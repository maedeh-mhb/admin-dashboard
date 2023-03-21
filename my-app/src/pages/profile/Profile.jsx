import ProfileDetails from '../../components/admin/ProfileDetails';
import ProfileMain from '../../components/admin/ProfileMain';
import './Profile.scss'

function Profile(props) {
    return (
        <div className='profile-main-outer'>
            <ProfileDetails/>
            <ProfileMain/>
        </div>
    );
}

export default Profile;