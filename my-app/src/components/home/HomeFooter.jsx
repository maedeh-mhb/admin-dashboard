
import { useState } from 'react';
import DeleteModal from '../modal/DeleteModal';
import Modal from '../modal/Modal';
import OrderView from '../orders/OrderView';
import CustomDataTable from '../table/CustomDataTable';
import './HomeFooter.scss';

function HomeFooter(props) {
    const [isOpen,setOpen] = useState(false);
    const [isDeleteOpen,setDeleteOpen] = useState(false);
    const [data,setData] = useState({});


    const tableProps = {
        isOpen,
        setOpen,
        setData,
        setDeleteOpen
        
    };



    return (
        <>
         <div className='tableContainer'>
            <h1>Latest Orders</h1>
             <CustomDataTable {...tableProps}/> 
         </div> 
                   
         {
            isOpen && data.mode === 'View' && <Modal>{<OrderView {...data} setOpen={setOpen}/>}</Modal>
         }
         {
             isDeleteOpen && data.mode === 'Delete' && <Modal>{<DeleteModal {...data} setDeleteOpen={setDeleteOpen}/>}</Modal>
         }
        </>
       
    );
}

export default HomeFooter;