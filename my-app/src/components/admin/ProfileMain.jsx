import SimpleInput from '../inputs/SimpleInput';
import './ProfileMain.scss';

function ProfileMain(props) {
    return (
        <div className='profile-main-container'>
                <h1>Edit Profile</h1>
            <form className="profile-edit">
                <div className="formControl">
                    <SimpleInput variant="outlined" label="Name"/>
                </div>
            </form>
            <div className="reset"></div>
        </div>
    );
}

export default ProfileMain;