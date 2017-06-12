import React from 'react';
import { connect } from 'react-redux';
import { userRegisterRequest } from './actions/registerActions';
import { addFlashMessage } from './actions/flashMessagesActions';
import RegisterForm from './components/registerForm';

class Register extends React.Component {
    render() {
        const { userRegisterRequest, addFlashMessage } = this.props;
        return (
            <div className="cp-register">
                <RegisterForm userRegisterRequest={ userRegisterRequest } addFlashMessage={ addFlashMessage }></RegisterForm>
            </div>
        );
    }
}

Register.propTypes = {
    userRegisterRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
}

export default connect(null, { userRegisterRequest, addFlashMessage })(Register);
