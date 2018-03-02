import store from './store';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ChatContainer from './components/ChatContainer';
import Sock from './utils/client';
import { addMessage } from './actions/messages';

export const ChatComponent = (url, config) => {
    const add = message => store.dispatch(addMessage(message));
    let sock = Sock(add);
    return (
        <Provider store={store}>
            <ChatContainer Sock={sock} />
        </Provider>
    );
};

class ReactChatUI {
    constructor(
        { element, url } = {
            element,
            workflowID,
            sessionID,
            url: 'http://localhost:3000'
        }
    ) {
        if (element && element.nodeName) {
            this.element = element;
            let config = {
                workflowID,
                sessionID
            };
            ReactDOM.render(
                <ChatComponent url={url} config={config} />,
                element
            );
        } else {
            console.error(
                'React Chat UI: expected element to be a DOM element, instead got: ',
                element
            );
        }
    }
}
