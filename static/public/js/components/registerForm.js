import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { _inputRegisterValidations } from '../utilities/utilities';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
            invalid: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
    }

    isValid() {
        const { errors, isValid } = _inputRegisterValidations(this.state);

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
                .catch(err => {
                    this.setState({ errors: err.response.data, isLoading: false })
                });﻿
        }
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    checkUserExists(event) {
        const field = event.target.name;
        const value = event.target.value;
        if (value !== '') {
            this.props.isUserExists(value).then(res => {
                let errors = this.state.errors;
                let invalid;
                if (res.data.user) {
                    errors[field] = 'There is user with such ' + field;
                    invalid = true;
                }
                else {
                    errors[field] = '';
                    invalid = false;
                }
                this.setState({ errors, invalid });
            });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="cp-form" onSubmit={ this.onSubmit }>
                <div className="cp-form-header">
                    <p className="cp-form-header-text">Sing up now <i className="fa fa-pencil" aria-hidden="true"></i></p>
                </div>

                <div className="cp-form-body">
                    <div className={ classnames("cp-form-input-wrapper", { "errors": errors.username }) }>
                        <div className="cp-form-input-icon-wrapper">
                            <i className="fa fa-user-circle cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="username"
                               type="text"
                               className="cp-form-input"
                               placeholder="Your name..."
                               value={ this.state.username }
                               onChange={ this.onChange }
                               onBlur={ this.checkUserExists }>
                        </input>
                        <span className="cp-form-span">{ errors.username }</span>
                    </div>

                    <div className={ classnames("cp-form-input-wrapper", { "errors": errors.email }) }>
                        <div className="cp-form-input-icon-wrapper">
                            <i className="fa fa-envelope-open cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="email"
                               type="email"
                               className="cp-form-input"
                               placeholder="Your email..."
                               value={ this.state.email }
                               onChange={ this.onChange }
                               onBlur={ this.checkUserExists }>
                        </input>
                        <span className="cp-form-span">{ errors.email }</span>
                    </div>

                    <div className={ classnames("cp-form-input-wrapper", { "errors": errors.password }) }>
                        <div className="cp-form-input-icon-wrapper">
                            <i className="fa fa-key cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="password"
                               type="password"
                               className="cp-form-input"
                               placeholder="Your password..."
                               value={ this.state.password }
                               onChange={ this.onChange }>
                        </input>
                        <span className="cp-form-span">{ errors.password }</span>
                    </div>

                    <div className={ classnames("cp-form-input-wrapper", { "errors": errors.passwordConfirmation }) }>
                        <div className="cp-form-input-icon-wrapper">
                            <i className="fa fa-key cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="passwordConfirmation"
                               type="password"
                               className="cp-form-input"
                               placeholder="Confirm password..."
                               value={ this.state.passwordConfirmation }
                               onChange={ this.onChange }>
                        </input>
                        <span className="cp-form-span">{ errors.passwordConfirmation }</span>
                    </div>
                </div>
                <div className="cp-form-button-wrapper">
                    <button disabled={ this.state.isLoading || this.state.invalid } className="cp-form-button">Register</button>
                </div>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    userRegisterRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

export default RegisterForm;
