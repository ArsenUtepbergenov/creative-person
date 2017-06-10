import React from 'react';
import classnames from 'classnames';
import { _commonValidations } from '../utilities/utilities';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            userPasswordConfirmation: '',
            errors: {},
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = _commonValidations(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userRegisterRequest(this.state)
                .then(() => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You registered successfully. Welcome!'
                    });
                    this.context.router.history.push('/');
                })
                .catch(error => {
                    this.setState({ errors: error.response.data, isLoading: false })
                });﻿
        }
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="cp-form" onSubmit={this.onSubmit}>
                <div className="cp-form-header">
                    <p className="cp-form-header-text">Sing up now <i className="fa fa-pencil" aria-hidden="true"></i></p>
                </div>

                <div className="cp-form-body">
                    <div className={ classnames("cp-form-input-wrapper", { "errors": errors.username }) }>
                        <div className="cp-form-input-icon-wrapper">
                            <i className="fa fa-user-circle cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userName"
                               type="text"
                               className="cp-form-input"
                               placeholder="Your name..."
                               value={this.state.userName}
                               onChange={this.onChange}>
                        </input>
                        <span className="cp-form-span">{ errors.username }</span>
                    </div>

                    <div className={ classnames("cp-form-input-wrapper", { "errors": errors.email }) }>
                        <div className="cp-form-input-icon-wrapper">
                            <i className="fa fa-envelope-open cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userEmail"
                               type="email"
                               className="cp-form-input"
                               placeholder="Your email..."
                               value={this.state.userEmail}
                               onChange={this.onChange}>
                        </input>
                        <span className="cp-form-span">{ errors.email }</span>
                    </div>

                    <div className={ classnames("cp-form-input-wrapper", { "errors": errors.password }) }>
                        <div className="cp-form-input-icon-wrapper">
                            <i className="fa fa-key cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userPassword"
                               type="password"
                               className="cp-form-input"
                               placeholder="Your password..."
                               value={this.state.userPassword}
                               onChange={this.onChange}>
                        </input>
                        <span className="cp-form-span">{ errors.password }</span>
                    </div>

                    <div className={ classnames("cp-form-input-wrapper", { "errors": errors.passwordConfirmation }) }>
                        <div className="cp-form-input-icon-wrapper">
                            <i className="fa fa-key cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userPasswordConfirmation"
                               type="password"
                               className="cp-form-input"
                               placeholder="Confirm password..."
                               value={this.state.userPasswordConfirmation}
                               onChange={this.onChange}>
                        </input>
                        <span className="cp-form-span">{ errors.passwordConfirmation }</span>
                    </div>

                </div>
                <button disabled={ this.state.isLoading } className="cp-form-button">Register</button>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    userRegisterRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}

RegisterForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default RegisterForm;
