import React from 'react';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            userPasswordConfirmation: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.userRegisterRequest(this.state);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className="cp-register-form" onSubmit={this.onSubmit}>
                <div className="cp-register-form-body">
                    <div className="cp-register-form-input-wrapper">
                        <div className="cp-register-form-input-icon-wrapper">
                            <i className="fa fa-user-circle cp-register-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userName"
                               type="text"
                               className="cp-register-form-input"
                               placeholder="Your name..."
                               value={this.state.userName}
                               onChange={this.onChange}>
                        </input>
                    </div>
                    <div className="cp-register-form-input-wrapper">
                        <div className="cp-register-form-input-icon-wrapper">
                            <i className="fa fa-envelope-open cp-register-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userEmail"
                               type="email"
                               className="cp-register-form-input"
                               placeholder="Your email..."
                               value={this.state.userEmail}
                               onChange={this.onChange}>
                        </input>
                    </div>
                    <div className="cp-register-form-input-wrapper">
                        <div className="cp-register-form-input-icon-wrapper">
                            <i className="fa fa-key cp-register-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userPassword"
                               type="password"
                               className="cp-register-form-input"
                               placeholder="Your password..."
                               value={this.state.userPassword}
                               onChange={this.onChange}>
                        </input>
                    </div>
                    <div className="cp-register-form-input-wrapper">
                        <div className="cp-register-form-input-icon-wrapper">
                            <i className="fa fa-key cp-register-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userPasswordConfirmation"
                               type="password"
                               className="cp-register-form-input"
                               placeholder="Confirm password..."
                               value={this.state.userPasswordConfirmation}
                               onChange={this.onChange}>
                        </input>
                    </div>
                </div>
                <button className="cp-register-form-button">Register</button>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    userRegisterRequest: React.PropTypes.func.isRequired
}

export default RegisterForm;
