import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ modifiers, type, onClick, children, ...rest }) => (
    <button
        className={`Button ${modifiers ? modifiers : ''}`}
        type={type}
        onClick={onClick}
        {...rest}
    >
        {children}
    </button>
);

Button.propTypes = {
    modifiers: PropTypes.string,
    children: PropTypes.node,
    '...rest': PropTypes.any
};

export default Button;
