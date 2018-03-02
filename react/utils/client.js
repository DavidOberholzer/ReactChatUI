import SockJS from 'sockjs-client';

let sock = null;

export default (getSockClient = (url, config, receiveHandler) => {
    if (!sock) {
        sock = new SockJS(url);
        sock.onopen = () => {
            console.log('Sock JS connection opened!');
        };
        sock.onmessage = event => {
            console.log('Message Received');
            receiveHandler(event.data);
        };
        sock.onclose = () => {
            console.log('Sock JS Connection closed!');
        };
    }
    return sock;
});
