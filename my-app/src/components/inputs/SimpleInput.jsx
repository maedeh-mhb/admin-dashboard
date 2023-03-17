import TextField from '@mui/material/TextField';
import './Input.scss';

function SimpleInput(props) {
    const {label,onChange,value} =props;

    return (
        <TextField 
        id="outlined-helperText" 
        label={label} 
        variant="standard" 
        value={value} 
        onChange={onChange}/>
    );
}

export default SimpleInput;