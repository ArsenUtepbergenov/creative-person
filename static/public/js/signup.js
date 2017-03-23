import React from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from './actions/signupActions';
import SignupForm from './signupForm.js';

class Signup extends React.Component {
    render() {
        const { userSignupRequest } = this.props;
        return (
            <SignupForm userSignupRequest={ userSignupRequest }></SignupForm>
        );
    }
}

Signup.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Signup);
