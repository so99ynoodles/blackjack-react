import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Hand from '../../molecules/Hand';
import UserStatus from '../../molecules/UserStatus';
import ResultModal from '../../molecules/ResultModal';
import ErrorModal from '../../molecules/ErrorModal';
import GameButtons from '../../molecules/GameButtons';

export default function Board({
  user,
  game,
  onStart,
  onStand,
  onHit,
  onContinue,
  onCancel,
  onError,
}) {
  return (
    <div className="board">
      <ErrorModal open={game.error} onClose={onCancel} />
      <ResultModal
        header={game.header}
        description={game.description}
        open={game.finished}
        onClose={onCancel}
        onContinue={onContinue}
      />
      <div className="board__background">
        <Hand
          gaming={game.gaming}
          onError={onError}
          className="board__hand board__hand--dealer"
          cards={game.dealerHand}
          dealer={game.checkPoint ? false : true}
        />
        <div className="board__btns">
          <GameButtons game={game} onStart={onStart} onStand={onStand} onHit={onHit} />
        </div>
        <Hand
          gaming={game.gaming}
          onError={onError}
          className="board__hand board__hand--player"
          cards={game.playerHand}
        />
      </div>
      <UserStatus className="board__userStatus" user={user} onError={onError} />
    </div>
  );
}

Board.propTypes = {
  user: PropTypes.object,
  game: PropTypes.object,
};
