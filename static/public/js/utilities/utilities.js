import validator from 'validator';
import axios from 'axios';

export function _getId(first, last) {
    return Math.floor(Math.random() * (last - first) + first);
};

export function _isEmpty(object) {
    if (Object.keys(object).length == 0)
        return true;

    return false;
}

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export function _inputRegisterValidations(data) {
    let errors = {};

    if (validator.isEmpty(data.username))
        errors.username = 'This field is required';

    if (validator.isEmpty(data.email))
        errors.email = 'This field is required';

    if (!validator.isEmail(data.email))
        errors.email = 'Email is invalid';

    if (validator.isEmpty(data.password))
        errors.password = 'This field is required';

    if (validator.isEmpty(data.passwordConfirmation))
        errors.passwordConfirmation = 'This field is required';

    if (!validator.equals(data.password, data.passwordConfirmation))
        errors.passwordConfirmation = 'Passwords must match';

    return {
        errors,
        isValid: _isEmpty(errors)
    }
}

export function _inputLoginValidations(data) {
    let errors = {};

    if (validator.isEmpty(data.identifier))
        errors.identifier = 'This field is required';

    if (validator.isEmpty(data.password))
        errors.password = 'This field is required';

    return {
        errors,
        isValid: _isEmpty(errors)
    }
}
