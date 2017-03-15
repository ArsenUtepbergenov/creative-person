import React from 'react';

class SignupForm extends React.Component {
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
        console.log(this.state);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className="cp-signup-form" onSubmit={this.onSubmit}>
                <h2 className="cp-signup-form-caption">Join our site!</h2>
                <div className="cp-signup-form-input-wrapper">
                    <div className="cp-signup-form-input-icon-wrapper">
                        <i className="fa fa-user-circle cp-signup-form-input-icon" aria-hidden="true"></i>
                    </div>
                    <input name="userName"
                           type="text"
                           className="cp-signup-form-input"
                           placeholder="Your name..."
                           value={this.state.userName}
                           onChange={this.onChange}>
                    </input>
                </div>
                <input name="userEmail"
                       type="email"
                       className="cp-signup-form-input"
                       placeholder="Your email..."
                       value={this.state.userEmail}
                       onChange={this.onChange}>
                </input>
                <input name="userPassword"
                       type="password"
                       className="cp-signup-form-input"
                       placeholder="Your password..."
                       value={this.state.userPassword}
                       onChange={this.onChange}>
                </input>
                <input name="userPasswordConfirmation"
                       type="password"
                       className="cp-signup-form-input"
                       placeholder="Confirm password..."
                       value={this.state.userPasswordConfirmation}
                       onChange={this.onChange}>
                </input>
                <button className="cp-signup-form-button">Sign up</button>
            </form>
        );
    }
}

export default SignupForm;
