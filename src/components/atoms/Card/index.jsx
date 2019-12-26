import React from 'react';
import PropTypes from 'prop-types';
import '../.././../common/sprite.css';
import './index.css';
import { cardImages } from './cardImages';

export default function Card({ id, back, onError }) {
  return id > 0 && id < 53 ? (
    <div className="scene">
      <div className={back ? 'card' : 'card flipped'}>
        <div className={cardImages.back + ' card__face card__face--back'} />
        <div className={cardImages[id] + ' card__face card__face--front'} />
      </div>
    </div>
  ) : (
    <div className="card" style={{ display: 'inline-block' }}>
      {onError()}
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  back: PropTypes.bool,
  onError: PropTypes.func,
};
