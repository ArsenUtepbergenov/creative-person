import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/signinActions';

class Menu extends React.Component {
    logout(event) {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        const { isAuthenticated } = this.props.authentication;

        const userLinks = (
            <a href="#" className="cp-menu-logout-link" onClick={this.logout.bind(this)}>Logout</a>
        );

        const guestLinks = (
            <div>
                <NavLink to='/register' className="cp-header-link-register">
                    <i className="fa fa-user-plus" aria-hidden="true"></i> <span className="cp-header-link-register-text">Register</span>
                </NavLink>
                <span> / </span>
                <NavLink to='/signin' className="cp-header-link-signin">
                    <i className="fa fa-sign-in" aria-hidden="true"></i> <span className="cp-header-link-signin-text">Sign in</span>
                </NavLink>
            </div>
        );

        return (
            <div className="cp-header-menu-elements">
                <div className="cp-menu-element">
                    <div className="cp-form-input-search-wrapper">
                        <div className="cp-form-input-search-icon-wrapper">
                            <i className="fa fa-search cp-form-input-icon" aria-hidden="true"></i>
                        </div>
                        <input type="text"
                               className="cp-form-input-search"
                               placeholder="Search art..."
                        />
                    </div>
                </div>
                <div className="cp-menu-element">
                    { isAuthenticated ? userLinks : guestLinks }
                </div>
            </div>
        )
    }
}

Menu.propTypes = {
    authentication: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}

export default connect(mapStateToProps, { logout })(Menu);
