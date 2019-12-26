import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

export default function GameButtons({ game, onStart, onStand, onHit }) {
  return game.gaming ? (
    <Button.Group className="board__btns--hit-stand-btns">
      <Button onClick={onStand} disabled={!game.choosing}>
        Stand
      </Button>
      <Button.Or />
      <Button onClick={onHit} disabled={!game.choosing} positive>
        Hit
      </Button>
    </Button.Group>
  ) : (
    <Button loading={game.gameLoading} color="red" onClick={onStart}>
      <Icon name="play" />
      Game Start
    </Button>
  );
}

GameButtons.propTypes = {
  game: PropTypes.object,
  onStart: PropTypes.func,
  onStand: PropTypes.func,
  onHit: PropTypes.func,
};
