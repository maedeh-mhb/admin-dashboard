import './Button.scss';

function Button(props) {


    return (
        <div className={`button-container ${props.variant}`}>
            <button {...props} onClick={props.onClick}>{props.label}</button>
        </div>
    );
}

export default Button;