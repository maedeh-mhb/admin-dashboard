import './ProfileDetail.scss';
import profile from '../../assets/images/profile.jpg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';

function ProfileDetails(props) {
    const [file, setFile] = useState(profile);

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className='profile-detail-container'>
                
                
                <div className='profile-box'></div>
                <Tooltip title={<h1 style={{fontSize:'10px'}}>Click To Change</h1>}>
                <label htmlFor='select-image'>
                <img alt='profile' src={file} className="profile-detail-item avatar"/>
                </label>
                </Tooltip>
                <input type="file" onChange={handleChange} id="select-image" />
                <div className="profile-detail">
                <span className="profile-detail-item">MAEDEH MOHEBBIE</span>
                <span className="profile-detail-item">FE Developer</span>
                </div>       
            <div className="about">
                <Link>
                    <span className="about-item"><AttachEmailIcon/>maedehmohebbie@gmail.com</span>
                </Link>
                <span className="about-item"><LocalPhoneIcon/> 0921-5354589</span>
                <Link>
                <span className="about-item"><GitHubIcon/>@dsdfgfgfgfgfg</span>
                </Link>
                
            </div>
        </div>
    );
}

export default ProfileDetails;