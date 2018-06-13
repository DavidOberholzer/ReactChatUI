import makeStore from './store';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ChatContainer from './components/ChatContainer';
import WebSocket from './utils/client';
import { messageAdd } from './actions/messages';
import { randomId } from './utils/generation';

export const ChatComponent = ({ url, config }) => {
    const store = makeStore();
    const add = message => store.dispatch(messageAdd(message));
    WebSocket(url, config, add);
    return (
        <Provider store={store}>
            <ChatContainer />
        </Provider>
    );
};

class ReactChatUI {
    constructor(
        { element, workflowID, sessionID, url } = {
            element,
            workflowID,
            sessionID: randomId,
            url: 'http://localhost:3000/chat'
        }
    ) {
        if (element && element.nodeName) {
            this.element = element;
            let config = {
                workflowID,
                sessionID
            };
            ReactDOM.render(<ChatComponent url={url} config={config} />, element);
        } else {
            console.error(
                'React Chat UI: expected element to be a DOM element, instead got: ',
                element
            );
        }
    }
}

export default ReactChatUI;
