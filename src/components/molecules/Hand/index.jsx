import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import Card from '../../atoms/Card';
import PointLabel from '../../atoms/PointLabel';
import './index.css';

class Hand extends React.Component {
  render() {
    const { cards, dealer, onError, gaming } = this.props;
    const cardList = cards.map((card, index) => {
      if (index === 0) return <Card key={card} id={card} onError={onError} />;
      return <Card key={card} id={card} onError={onError} back={dealer} />;
    });

    return (
      <div style={{ textAlign: 'center' }}>
        <PointLabel cards={cards} dealer={dealer} gaming={gaming} />
        <div style={{ height: 150 }}>
          <CSSTransitionGroup
            transitionName="card"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={0}
          >
            {cardList}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

Hand.propTypes = {
  cards: PropTypes.array,
  dealer: PropTypes.bool,
  onError: PropTypes.func,
  gaming: PropTypes.bool,
};

export default Hand;
