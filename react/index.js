import makeStore from './store';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ChatContainer from './components/ChatContainer';
import WebSocket from './utils/client';
import { messageAdd } from './actions/messages';
import { randomId } from './utils/generation';
import reducers from './reducers';

// Export all reducers and actions for own store usage.
export const ChatUIReducers = reducers;
export const ChatUImessageAdd = messageAdd;

export const ChatComponent = ({ url, config, store = null }) => {
    let useProvider = false;
    if (!store) {
        store = makeStore();
        useProvider = true;
    }
    const add = message => store.dispatch(messageAdd(message));
    WebSocket(url, config, add);
    return useProvider ? (
        <Provider store={store}>
            <ChatContainer />
        </Provider>
    ) : (
        <ChatContainer />
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
        if (element && element.nodeName && workflowID) {
            this.element = element;
            let config = {
                workflowID,
                sessionID
            };
            ReactDOM.render(<ChatComponent url={url} config={config} />, element);
        } else {
            console.error(
                workflowID
                    ? `React Chat UI: expected element to be a DOM element, instead got: ${element}`
                    : `React Chat UI: No workflowID provided.`
            );
        }
    }
}

export default ReactChatUI;
