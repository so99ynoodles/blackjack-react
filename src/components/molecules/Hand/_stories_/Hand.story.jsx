import React from 'react';

import { storiesOf } from '@storybook/react';

import Hand from '../';

const onError = () => <p style={{ color: 'red' }}>Invalid Image!</p>;

storiesOf('molecules/Hand', module)
  .add('Player Hand', () => <Hand cards={[1, 52, 17]} onError={onError} />)
  .add('Dealer Hand', () => <Hand cards={[13, 2, 3]} dealer onError={onError} />)
  .add('0 Hand', () => <Hand cards={[]} onError={onError} />);
