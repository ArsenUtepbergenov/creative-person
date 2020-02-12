import React from 'react';
import SignInForm from './components/signInForm';

class SignIn extends React.Component {
    render() {
        return (
            <div className="cp-signin">
                <SignInForm />
            </div>
        );
    }
}

export default SignIn;
