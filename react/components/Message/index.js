import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ show, modifiers, origin, children, ...rest }) => (
    <div
        className={`MessageContainer MessageContainer--${
            origin ? origin : 'remote'
        } ${show ? 'show' : ''}`}
    >
        <div
            className={`Message ${modifiers ? modifiers : ''} Message--${
                origin ? origin : 'remote'
            }`}
        >
            {children}
        </div>
    </div>
);

Message.propTypes = {
    modifiers: PropTypes.string,
    origin: PropTypes.string,
    text: PropTypes.stringS
};

export default Message;
