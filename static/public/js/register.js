import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userRegisterRequest, isUserExists } from './actions/registerActions';
import { addFlashMessage } from './actions/flashMessagesActions';
import RegisterForm from './components/registerForm';

class Register extends React.Component {
    render() {
        const { userRegisterRequest, addFlashMessage, isUserExists } = this.props;
        return (
            <div className="cp-register">
                <RegisterForm isUserExists={ isUserExists } userRegisterRequest={ userRegisterRequest } addFlashMessage={ addFlashMessage } />
            </div>
        );
    }
}

Register.propTypes = {
    userRegisterRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

export default connect(null, { userRegisterRequest, addFlashMessage, isUserExists })(Register);
