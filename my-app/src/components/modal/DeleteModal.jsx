
import Button from '../buttons/Button';
import CloseIcon from '@mui/icons-material/Close';
import './Overlay.scss';

function DeleteModal(props) {
    const {setDeleteOpen} =props;

    return (
        <>
         <div className="close" onClick={()=>setDeleteOpen(false)}><CloseIcon/></div>
        <div className='delete-container'>
            Are You Sure You Want To Delete ?
        </div>
        <div  className='delete-button'>
            <Button label={'Ok'} variant="primary"/>
        </div>
     </>
    );
}

export default DeleteModal;
