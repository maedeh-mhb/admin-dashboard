import './OrderView.scss';
import Tooltip from '@mui/material/Tooltip';
import Button from '../buttons/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from 'react';
import SimpleInput from '../inputs/SimpleInput';
import CloseIcon from '@mui/icons-material/Close';

function OrderView(props) {
     const {params: {product,id,email,date,status,userName,paid,phone,total},setOpen} =props;
     const [edit,setEdit] = useState('');
     const [editMode,setEditMode] = useState(false);


     function cancelHandler(e) {
        setEditMode(false);
        setEdit('')
     };

     function handleSubmit(e) {
        e.preventDefault();
     };

     function editHandler(e) {
        setEdit(e.currentTarget.id);
        setEditMode(true);   
     }

    return (
        <>
        <div className="close" onClick={()=>setOpen(false)}><CloseIcon/></div>
        <form className='order-view-container' onSubmit={(e)=>handleSubmit(e)}>
            <h2 className='modal-header'>{`${editMode ? 'Edit' : 'View'} Information`}</h2>
            <Tooltip title={<h1 style={{ fontSize: "1rem " }}>Order Code</h1>}>
             <h1>
                <span><p className='order-view-item'>{edit === 'product' ? <SimpleInput value={product}/> : product}{`(${id})`}</p></span>
                <span className="order-icon" id="product" onClick={editHandler}><BorderColorIcon/></span>
            </h1>
            </Tooltip>
            <div className='order-view-items'>
                <p>Customer Info.</p>
                <div className='order-view-item'>Customer Name : <span>{userName}</span></div>
                <div className='order-view-item'>Customer Email : <span>{email}</span></div>
                <div className='order-view-item'>Customer Phone Number : <span>{phone}</span></div>
            </div>
            <div className='order-view-items'>
                <p>Payment Info.</p>
                <div className='order-view-item'>Payment status : <span className={`${status}`}>{edit === 'status' ? <SimpleInput value={status}/> : status}</span>
                <span id ="status" className="order-icon" onClick={editHandler}><BorderColorIcon/></span>
                </div>
                <div className='order-view-item'>Total Price : <span>{edit === 'total' ? <SimpleInput value={total}/> : total}</span>
                <span className="order-icon" id ="total" onClick={editHandler}><BorderColorIcon/></span>
                </div>
                <div className='order-view-item'>Paid:<span>{edit === 'paid' ? <SimpleInput value={paid}/> : paid}</span> 
                <span className="order-icon" id ="paid" onClick={editHandler}><BorderColorIcon/></span>
                </div>
            </div> 
            <div className='buttons-container'>
                {
                    editMode && <>
                     <Button label="Cancle" variant="secondary" onClick={cancelHandler}/>
                     <Button label="Edit"variant="primary"  onClick={()=>setOpen(false)} />    
                    </> 
                }
                
            </div>
        </form>
        </>
    );
}

export default OrderView;