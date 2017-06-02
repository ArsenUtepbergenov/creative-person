import validator from 'validator';

export function _getId(first, last) {
    return Math.floor(Math.random() * (last - first) + first);
};

function isEmpty(object) {
    if (Object.keys(object).length == 0) {
        return true;
    }
    return false;
}

export function validateInput(data) {
    let errors = {};

    if (validator.isEmpty(data.userName)) {
        errors.username = 'This field is required';
    }

    if (validator.isEmpty(data.userEmail)) {
        errors.email = 'This field is required';
    }
    if (!validator.isEmail(data.userEmail)) {
        errors.email = 'Email is invalid';
    }

    if (validator.isEmpty(data.userPassword)) {
        errors.password = 'This field is required';
    }

    if (validator.isEmpty(data.userPasswordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if (!validator.equals(data.userPassword, data.userPasswordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
