import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render() {
        const { id, type, text } = this.props.message;
        return (
            <div className="cp-background-section">
                <div className={ classnames("cp-alert", { "cp-alert-success": type === "success", "cp-alert-danger": type === "error" })} >
                    <button onClick={ this.onClick } className="cp-alert-close"><span>&times;</span></button>
                    { text }
                </div>
            </div>
        );
    }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;
