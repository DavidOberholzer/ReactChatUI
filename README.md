# ReactChatUI

This is my React-Redux chat UI using WebSockets to talk to a websocket based Chat Engine. Mainly made to plugin with my Node-Chat-Engine, but can plugin to any simple chat engine you make that fits the mold.

## Setup

With yarn lets start:

`yarn install`

We have a couple of scripts that can be run to generate files you can use in your chat instance.

**yarn build:nwb:**
This will generate UMD files in the `/umd` directory for you to grab.

**yarn build:webpack**
This will generate a webpack bundle js and css file in src.

**yarn storybook**
This will start a storybook on port 9000, to view stories of react components being styled.

## Using in HTML

You can link to the UMD script generated and create an instance of the Chat UI to talk to a websocket based engine. Here is an example setup html file.

```
<head>
    <script src="react-chat-ui.js"></script>
    <link rel="stylesheet" href="react-chat-ui.css" />
</head>

<div id="chat-element"></div>

<script>
    var element = document.getElementById('chat-element');

    var reactWebChat = new ReactChatUI({
        url: 'ws://localhost:3000/chat',
        element: element,
        workflowID: 1
    });
</script>
```

## TODOs

*   Fix Styling and Color Scheme.
*   Messages come in smooth style transitions rather that instant.
*   Scroll to bottom of chat when new messages come in below.
*   User typed input. (When My Chat Engine includes it.)
