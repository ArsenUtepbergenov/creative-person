import React from 'react';
import { NavLink } from 'react-router-dom';

class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPassword: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className="cp-form">
                <div className="cp-form-header">
                    <p className="cp-form-header-text">Login to site <i className="fa fa-lock" aria-hidden="true"></i></p>
                </div>

                <div className="cp-form-body">
                    <div className="cp-form-input-wrapper">
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
                    </div>
                    <div className="cp-form-input-wrapper">
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
                    </div>
                </div>
                <button className="cp-form-button">Sign in</button>

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

export default SigninForm;
