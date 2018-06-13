import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { messageAdd } from '../../actions/messages';
import InputBar from '../InputBar';
import MessageContainer from '../MessageContainer';
import { MESSAGE_ADD } from '../../actionTypes';
import { randomId } from '../../utils/generation';

const mapStateToProps = state => {
    console.log(state);
    return {
        messages: state.messages.messages
    };
};

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this._last &&
            this._last.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'end'
            });
    }

    render() {
        const { messages } = this.props;
        let showInput = false;
        if (messages.length > 0) {
            showInput = !!messages[messages.length - 1].input;
        }
        return (
            <div className="ChatContainer">
                {messages.length > 0 ? (
                    messages.map((message, index) => {
                        const id = randomId();
                        const lastMessages = index >= messages.length - 3;
                        const lastMessage = index === messages.length - 1;
                        return (
                            <MessageContainer
                                key={id}
                                origin={message.origin}
                                text={message.text}
                                buttons={message.buttons}
                                lastMessages={lastMessages}
                                lastMessage={lastMessage}
                            />
                        );
                    })
                ) : (
                    <span>No messages received, yet!</span>
                )}
                {showInput && <InputBar />}
            </div>
        );
    }
}

ChatContainer.propTypes = {
    messages: PropTypes.array
};

export default connect(
    mapStateToProps,
    null
)(ChatContainer);
