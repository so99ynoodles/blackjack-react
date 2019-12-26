import React from 'react';

import { storiesOf } from '@storybook/react';
import GameButtons from '..';

const game = {
  gaming: false,
  gameLoading: false,
  choosing: false,
};

storiesOf('molecules/GameButtons', module)
  .add('Before Start Game', () => <GameButtons game={game} />)
  .add('Loading Game', () => <GameButtons game={{ ...game, gameLoading: true }} />)
  .add('Gaming', () => <GameButtons game={{ ...game, gaming: true }} />)
  .add('Choosing', () => <GameButtons game={{ ...game, gaming: true, choosing: true }} />);
