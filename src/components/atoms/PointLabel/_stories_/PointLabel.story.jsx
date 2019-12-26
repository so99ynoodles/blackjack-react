import React from 'react';

import { storiesOf } from '@storybook/react';

import PointLabel from '../';

storiesOf('atoms/PointLabel', module)
  .add('Ace and King', () => <PointLabel cards={[1, 26]} gaming />)
  .add('Dealer', () => <PointLabel dealer cards={[39, 52]} gaming />)
  .add('Not Gaming', () => <PointLabel cards={[]} />);
