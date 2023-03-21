import './LoginForm.scss';
import SimpleInput from '../inputs/SimpleInput';
import { useCallback, useContext, useState } from 'react';
import useFormValidate from '../../custom/CustomHooks/useFormValidate';
import Button from '../buttons/Button';
import { UserContext } from '../../context/user/UserContext';
import CheckBox from '../inputs/CheckBox';
import {useNavigate} from 'react-router-dom';

function LoginForm(props) {

    const defaultValues = {
        username:'',
        password:''
    };
    const [showPassword,setShow] = useState(false);
    const [formFields,setFormFields] = useState(defaultValues);
    const [isSubmit,setIsSubmit] = useState(false);
    const {username,password} = formFields;
    const {addUser,currentUser} = useContext(UserContext);
    const navigate = useNavigate();

    function handleClickShowPassword() {
        setShow(!showPassword)
    };

    const handleChange= useCallback((event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    },[formFields]);

    const [error,setError] = useFormValidate(
        {formData:
        [{fieldName:'username',fieldType:'text',fieldValue:formFields.username},
        {fieldName:'password',fieldType:'password',fieldValue:formFields.password},
        ],isSubmit:isSubmit,onChangeField:handleChange});

    function submitHandler(e) {
        console.log(currentUser,'ERROR',error)
        e.preventDefault();
        if(!error.username && !error.password) {
            addUser({
                userName:username,
                email:'maedehmohebbie@yahoo.com',
                id:'maedeh12@#'
            });
            navigate('/')
        }
    };
    console.log(currentUser)
    function onCancel(e) {
        e.preventDefault();
        setFormFields(defaultValues)
        setIsSubmit(false);
        setError({});
}

    return (

            <form className='login-form'>
                <div className="formControl">
                    <SimpleInput 
                    label="User Name" 
                    name="username" 
                    onChange={handleChange} 
                    error={error['username']}
                    value={username}/>
                </div>
                <div className="formControl">
                    <SimpleInput 
                    type="password" 
                    label="Password" 
                    name="password" 
                    error={error['password']}
                    onChange={handleChange} 
                    value={password}
                    handleClickShowPassword={handleClickShowPassword} 
                    showPassword={showPassword}/>
                </div>
                <footer className='login-footer' >
                    <p className='remember'>
                        <span><CheckBox label="Remember me" /> </span>
                        <span>Forgot password?</span>
                    </p>
                    <Button label="Login" variant="primary" onClick={(e)=>{
                         setIsSubmit(true);
                         submitHandler(e);
                    }}/>
                    <p className='inner-text'>Or Login With</p>
                    <Button label="Google" variant="google"/> 
                    <p className='inner-text member'>Not a member? Signup now</p>
                </footer>
            </form>

    );
}

export default LoginForm;