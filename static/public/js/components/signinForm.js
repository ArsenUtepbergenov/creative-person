import React from 'react';

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
            <form className="cp-signin-form">
                <div className="cp-signin-form-body">
                    <div className="cp-signin-form-input-wrapper">
                        <div className="cp-signin-form-input-icon-wrapper">
                            <i className="fa fa-user-circle cp-signin-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userName"
                               type="text"
                               className="cp-signin-form-input"
                               placeholder="Your name..."
                               value={this.state.userName}
                               onChange={this.onChange}>
                        </input>
                    </div>
                    <div className="cp-signin-form-input-wrapper">
                        <div className="cp-signin-form-input-icon-wrapper">
                            <i className="fa fa-key cp-signin-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input name="userPassword"
                               type="password"
                               className="cp-signin-form-input"
                               placeholder="Your password..."
                               value={this.state.userPassword}
                               onChange={this.onChange}>
                        </input>
                    </div>
                </div>
                <button className="cp-signin-form-button">Sign in</button>
            </form>
        );
    }
}

export default SigninForm;
