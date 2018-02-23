import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Message from '../components/Message';

storiesOf('Message', module)
    .add('user_message', () => (
        <Message show={true} origin="user">
            I am a user and this is my message
        </Message>
    ))
    .add('bot_message', () => (
        <Message show={true} modifiers="show" origin="remote">
            I am a bot and this is my will.
        </Message>
    ))
    .add('old_message', () => (
        <Message show={true} modifiers="Message--old show">
            Old message here
        </Message>
    ));
