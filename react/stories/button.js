import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import makeStore from '../store';
import Button from '../components/Button';

const store = makeStore();

storiesOf('Button', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('plain_button', () => <Button modifiers="Button--plain">Plain Button</Button>)
    .add('disabled_button', () => <Button modifiers="Button--disabled">Main Button</Button>);
