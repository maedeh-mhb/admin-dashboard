import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function CheckBox(props) {
    const {label,name,handleChange} = props;
    return (
        <FormControlLabel control={<Checkbox  checked={name} onChange={handleChange} name={name} />}  label={label} />
    );
}

export default CheckBox;