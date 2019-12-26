import React from 'react';

import { storiesOf } from '@storybook/react';
import Board from '../';
import md5 from 'md5';

const user = {
  username: 'taro',
  avatar: `https://gravatar.com/avatar/${md5('taro')}?d=identicon`,
  userStats: {
    win: 0,
    lost: 0,
    draw: 0,
  },
};

const game = {
  error: false,
  playerHand: [],
  dealerHand: [],
  gaming: false,
  header: 'Congratulations!',
  description: '勝利しました！',
};

storiesOf('templates/Board', module)
  .add('Default', () => <Board game={game} />)
  .add('Game Loading', () => <Board game={{ ...game, gameLoading: true }} />)
  .add('Game Start', () => (
    <Board
      game={{ ...game, playerHand: [4, 25], dealerHand: [50, 30], gaming: true, choosing: true }}
      user={user}
    />
  ))
  .add('On Error', () => <Board game={{ ...game, error: true }} />)
  .add('On Victory', () => (
    <Board
      game={{
        ...game,
        gaming: true,
        dealerHand: [5, 38, 39],
        playerHand: [52, 14],
        finished: true,
        checkPoint: true,
      }}
      user={user}
    />
  ));
