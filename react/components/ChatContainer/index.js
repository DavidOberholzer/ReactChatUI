import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MessageContainer from '../MessageContainer';
import { MESSAGE_ADD } from '../../actionTypes';
import { randomId } from '../../utils/generation';

const mapStateToProps = ({ messages }) => ({
    messages: messages.messages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: message => {
        dispatch({
            type: MESSAGE_ADD,
            payload: message
        });
    }
});

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
        let { messages, WebSocket, onClick } = this.props;
        let add = message => {
            WebSocket.send(JSON.stringify(message));
            onClick({
                ...message,
                origin: 'user'
            });
        };

        return (
            <div className="ChatContainer">
                {messages.map((message, index) => {
                    let id = randomId();
                    let lastMessage = index === messages.length - 1;
                    return (
                        <MessageContainer
                            key={id}
                            origin={message.origin}
                            text={message.text}
                            buttons={message.buttons}
                            lastMessage={lastMessage}
                            onClick={add}
                        />
                    );
                })}
            </div>
        );
    }
}

ChatContainer.propTypes = {
    messages: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
