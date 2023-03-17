import './Overlay.scss';


const Overlay = (props) => {
    
    return (
        
        <div className='modal-container'>
            
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Overlay;