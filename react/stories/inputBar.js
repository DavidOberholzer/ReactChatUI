import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputBar from '../components/InputBar';
import makeStore from '../store';

const store = makeStore();

storiesOf('Input Bar', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('input_bar', () => <InputBar />);
