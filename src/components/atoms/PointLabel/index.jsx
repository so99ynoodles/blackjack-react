import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import './index.css';

const getValueOfCard = id => {
  const value = id % 13;
  const KING = 0,
    QUEEN = 12,
    JACK = 11;

  if (value === KING || value === QUEEN || value === JACK) return 10;
  else return value;
};

const getTotalValueOfCards = cards => {
  const card = (cards || []).reduce(
    (acc, id) => {
      const value = getValueOfCard(id);
      acc.total += value;
      if (!acc.ace && value === 1) acc.ace = true;
      return acc;
    },
    {
      total: 0,
      ace: false,
    },
  );
  if (card.ace && card.total < 12) {
    card.total = card.total + 10;
  }
  return card.total;
};

export default function PointLabel({ dealer, cards, gaming }) {
  return gaming ? (
    <Label className="point-label">
      Point
      <Label.Detail>{dealer ? '?' : getTotalValueOfCards(cards)}</Label.Detail>
    </Label>
  ) : null;
}

PointLabel.propTypes = {
  dealer: PropTypes.bool,
  cards: PropTypes.array,
};
