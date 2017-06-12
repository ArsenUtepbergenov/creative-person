import React from 'react';
import SigninForm from './components/signinForm';

class Signin extends React.Component {
    render() {
        return (
            <div className="cp-signin">        
                <SigninForm></SigninForm>
            </div>
        );
    }
}

export default Signin;
