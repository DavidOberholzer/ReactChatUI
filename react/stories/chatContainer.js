import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ChatContainer from '../components/ChatContainer';

const messages = [
    {
        id: 1,
        text: 'Hello there! What do you want to do?',
        origin: 'remote',
        buttons: [
            {
                id: 1,
                text: 'Check the weather',
                goto: 1
            },
            {
                id: 2,
                text: "What's the agenda?",
                goto: 2
            },
            {
                id: 3,
                text: 'Where is it being hosted?',
                goto: 3
            }
        ]
    },
    {
        id: 2,
        text: 'Check the weather',
        origin: 'user'
    },
    {
        id: 3,
        text: "It's about 30 degrees out there today! Phew!",
        origin: 'remote',
        buttons: [
            {
                id: 4,
                text: 'Hour by Hour detail.',
                goto: 4
            },
            {
                id: 5,
                text: 'Go Back',
                goto: 1
            }
        ]
    },
    {
        id: 4,
        text: 'Go Back',
        origin: 'user'
    },
    {
        id: 5,
        text: 'Hello there! What do you want to do?',
        origin: 'remote',
        buttons: [
            {
                id: 6,
                text: 'Check the weather',
                goto: 1
            },
            {
                id: 7,
                text: "What's the agenda?",
                goto: 2
            },
            {
                id: 8,
                text: 'Where is it being hosted?',
                goto: 3
            }
        ]
    }
];

storiesOf('ChatContainer', module).add('A Simple chat', () => (
    <ChatContainer messages={messages} />
));
