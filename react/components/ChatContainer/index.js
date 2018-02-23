import React from 'react';
import PropTypes from 'prop-types';

import MessageContainer from '../MessageContainer';

const ChatContainer = ({ messages }) => (
    <div className="ChatContainer">
        {messages.map(message => {
            let id = message.id;
            return (
                <MessageContainer
                    key={id}
                    origin={message.origin}
                    text={message.text}
                    buttons={message.buttons}
                />
            );
        })}
    </div>
);

ChatContainer.propTypes = {
    messages: PropTypes.array
};

export default ChatContainer;
