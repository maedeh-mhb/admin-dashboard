import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Widget.scss';


function Widget(props) {
    const {title,total,progress,status,icon} = props;
    const navigate = useNavigate();
    
    return (
        <div className='widget' onClick={()=>navigate(`${title.toLowerCase()}`)}>
            <div className='wid-icon'>{icon}</div>
            <div className='wid-total'>
                <span className='total'>{total}</span>
                <span className={status}>{status === 'increase' ? <p>{`(${progress} %  `} &#8595; {')'}</p> : <p>{`(${progress} %  `}  &#x2191;{')'}</p>}</span>
            </div>
            <div className='wid-title'>{title}</div>
        </div>
    );
}

export default Widget;