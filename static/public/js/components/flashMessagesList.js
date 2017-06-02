import React from 'react';
import FlashMessage from './flashMessage';
import { connect } from 'react-redux';

class FlashMessagesList extends React.Component {
    render() {
        const messages = this.props.messages.map(message =>
            <FlashMessage key={ message.id } message={ message } />
        );
        return (
            <div>
                <FlashMessage message={ {id: 5474564, type: 'error', text: 'Red text and sample text'} } />
                { messages }
            </div>
        );
    }
}

FlashMessagesList.propTypes = {
    messages: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps)(FlashMessagesList);
