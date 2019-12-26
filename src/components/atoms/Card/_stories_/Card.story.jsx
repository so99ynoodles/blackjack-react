import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../';

const onError = () => <p style={{ color: 'red' }}>Invalid Image!</p>;

storiesOf('atoms/Card', module)
  .add('Back', () => <Card id={1} back onError={onError} />)
  .add('Diamond 10', () => <Card id={36} onError={onError} />)
  .add('Club Ace', () => <Card id={14} onError={onError} />)
  .add('Spade King', () => <Card id={52} onError={onError} />)
  .add('Heart Queen', () => <Card id={12} onError={onError} />)
  .add('Invalid', () => <Card id={0} onError={onError} />);
