import React from 'react';
import { connect } from 'react-redux';
import { userRegisterRequest } from './actions/registerActions';
import RegisterForm from './components/registerForm';

class Register extends React.Component {
    render() {
        const { userRegisterRequest } = this.props;
        return (
            <RegisterForm userRegisterRequest={ userRegisterRequest }></RegisterForm>
        );
    }
}

Register.propTypes = {
    userRegisterRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userRegisterRequest })(Register);
