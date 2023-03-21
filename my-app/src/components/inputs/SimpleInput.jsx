import TextField from '@mui/material/TextField';
import './Input.scss';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';

function SimpleInput(props) {
    const {label,variant,onChange,value,type,handleClickShowPassword,handleMouseDownPassword,showPassword,name,error} =props;

    return ( type === 'password' ? <> 
    <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
       <Input
       value={value}
       onChange={onChange}
       name={name}
       variant="standard"
       id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      
    /> 
    <span className='error'>{error}</span>
    </> : <>
    <InputLabel htmlFor="standard-basic">{label}</InputLabel>
    <Input 
    name={name}
     id="standard-basic"
     label={label} 
     variant={variant} 
     value={value} 
     onChange={onChange} 
     {...props}/>  
     <span className='error'>{error}</span>
    </>
       
    );
}

export default SimpleInput;