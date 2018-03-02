import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MessageContainer from '../MessageContainer';
import { MESSAGE_ADD } from '../../actionTypes';

const mapStateToProps = state => ({
    messages: state.messages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: message => {
        dispatch({
            type: MESSAGE_ADD,
            payload: button
        });
    }
});

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'end'
        });
    }

    render() {
        let { messages, Sock, onClick } = this.props;
        let add = message => {
            Sock.send(message);
            onClick(message);
        };

        return (
            <div className="ChatContainer">
                {messages.map((message, index) => {
                    let id = message.id;
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
