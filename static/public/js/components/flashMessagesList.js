import React from 'react';
import PropTypes from 'prop-types';
import FlashMessage from './flashMessage';
import { deleteFlashMessage } from '../actions/flashMessagesActions';
import { connect } from 'react-redux';

class FlashMessagesList extends React.Component {
    render() {
        const messages = this.props.messages.map(message =>
            <FlashMessage key={ message.id } message={ message } deleteFlashMessage={ this.props.deleteFlashMessage } />
        );
        return (
            <div>
                { messages }
            </div>
        );
    }
}

FlashMessagesList.propTypes = {
    messages: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
