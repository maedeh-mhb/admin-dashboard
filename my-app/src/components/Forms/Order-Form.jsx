
import { useState } from 'react';
import SimpleInput from '../inputs/SimpleInput';
import './Order-form.scss';

function OrderForm(props) {

    const {params: {product,id,email,date,status},setOpen} =props;
    const defaultValues = {
        orderName: product,
        orderCode: id,
        name:'',
        email:'',
        phone:'',
        status:'',
        total:'',
        paid:''
    };

    const [values,setValues] = useState(defaultValues);
    console.log(values.orderName)
    return (
        <div>
          <form className='form'>         
          <div style={{width:'40%'}}>
                <SimpleInput label={'order'}  value={values.orderName} />
          </div>      
          </form> 
        </div>
       
    );
}

export default OrderForm;
