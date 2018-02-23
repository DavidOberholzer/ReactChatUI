import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
    .add('plain_button', () => (
        <Button modifiers="Button--plain">Plain Button</Button>
    ))
    .add('disabled_button', () => (
        <Button modifiers="Button--disabled">Main Button</Button>
    ));
