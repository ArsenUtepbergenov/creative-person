import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../actions/signinActions';
import { _inputLoginValidations } from '../utilities/utilities';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = _inputLoginValidations(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state)
                .then(res => this.context.router.history.push('/'))
                .catch(err => {
                    this.setState({ errors: err.response.data.errors, isLoading: false })
                });
        }
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { errors, isLoading } = this.state;
        return (
            <form className="cp-form" onSubmit={ this.onSubmit }>
                <div className="cp-form-header">
                    <p className="cp-form-header-text">Login to site <i className="fa fa-lock" aria-hidden="true"></i></p>
                </div>

                { errors.form && <div className="cp-alert-form cp-alert-danger">{ errors.form }</div> }

                <div className="cp-form-body">
                    <div className={ classnames("cp-form-input-wrapper", { "errors": errors.identifier }) }>
                        <div className="cp-form-input-icon-wrapper">
                            <i className="fa fa-user-circle cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="identifier"
                               type="text"
                               className="cp-form-input"
                               placeholder="Your name..."
                               value={ this.state.identifier }
                               onChange={ this.onChange }>
                        </input>
                        <span className="cp-form-span">{ errors.identifier }</span>
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
                </div>
                <div className="cp-form-button-wrapper">
                    <button disabled={ isLoading } className="cp-form-button">Login</button>
                </div>

                <div className="cp-form-footer">
                    <p className="cp-form-footer-text">
                        <NavLink to='/register' className="cp-form-footer-link">
                            You do not have an account?
                        </NavLink>
                    </p>
                </div>
            </form>
        );
    }
}

SignInForm.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(SignInForm);
