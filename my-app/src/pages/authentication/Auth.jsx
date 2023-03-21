import './Auth.scss';

import LoginForm from '../../components/Forms/Login-Form';

function Auth(props) {
    return (
        <div className='login-container'>
            <div className="login-inner-container">
                <h1>Welcome Back, Login To Your Account!</h1>
              {<LoginForm/>}
            </div>
        </div>
    );
}

export default Auth;