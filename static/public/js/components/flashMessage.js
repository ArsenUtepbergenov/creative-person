import React from 'react';
import classnames from 'classnames';

export default function FlashMessage({ message }) {
    const { id, type, text } = message;

    return (
        <div className={ classnames("cp-alert", { "cp-alert-success": type === "success", "cp-alert-danger": type === "error" })} >
            <button className="cp-alert-close"><span>&times;</span></button>
            { text }
        </div>
    );
}

FlashMessage.propTypes = {
    message: React.PropTypes.object.isRequired
}
