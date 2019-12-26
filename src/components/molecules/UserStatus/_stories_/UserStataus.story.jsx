import React from 'react';
import md5 from 'md5';

import { storiesOf } from '@storybook/react';

import UserStatus from '../';

storiesOf('molecules/UserStatus', module)
  .add('Default', () => <UserStatus onError={() => <div />} />)
  .add('Several Wins', () => (
    <UserStatus
      user={{
        username: 'taiki',
        avatar: `https://gravatar.com/avatar/${md5('taiki')}?d=identicon`,
        userStats: {
          win: 150,
          lost: 14,
          draw: 30,
        },
      }}
    />
  ))
  .add('Single Win', () => (
    <UserStatus
      user={{
        username: 'okumiya',
        avatar: `https://gravatar.com/avatar/${md5('okumiya')}?d=identicon`,
        userStats: {
          win: 1,
          lost: 1,
          draw: 1,
        },
      }}
    />
  ));
