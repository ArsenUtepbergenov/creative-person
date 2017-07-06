import React from 'react';
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
    userRegisterRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, { userRegisterRequest, addFlashMessage, isUserExists })(Register);
