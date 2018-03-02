import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Message from '../Message';

const MessageContainer = ({
    modifiers,
    origin,
    text,
    buttons,
    lastMessage,
    onClick,
    ...rest
}) => (
    <div
        className={`MessageContainer MessageContainer--${
            origin ? origin : 'remote'
        }`}
    >
        <div
            className={`TextContainer TextContainer--${
                origin ? origin : 'remote'
            }`}
        >
            <Message
                modifiers={`${modifiers} ${lastMessage ? '' : 'Message--old'}`}
                origin={origin}
            >
                {text}
            </Message>
        </div>
        {buttons ? (
            <div className="ButtonContainer">
                {buttons.map(button => {
                    let id = button.id;
                    return (
                        <Button
                            key={id}
                            modifiers={`Button--plain ${
                                lastMessage ? '' : 'Button--disabled'
                            }`}
                            onClick={() => onClick(button)}
                        >
                            {button.text}
                        </Button>
                    );
                })}
            </div>
        ) : (
            ''
        )}
    </div>
);

MessageContainer.propTypes = {
    modifiers: PropTypes.string,
    origin: PropTypes.string,
    text: PropTypes.string,
    buttons: PropTypes.array
};

export default MessageContainer;
