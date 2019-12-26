import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from '../../templates/Board';
import * as actionCreators from '../../../actions';
class App extends Component {
  render() {
    const { user, game, images } = this.props;
    const {
      actions: { onHit, onStand, startAsync, onContinue, onCancel, onError },
    } = this.props;
    return (
      <Board
        images={images}
        user={user}
        game={game}
        onStart={() => startAsync()}
        onHit={() => onHit()}
        onStand={() => onStand()}
        onContinue={() => onContinue()}
        onCancel={() => onCancel()}
        onError={() => onError()}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    game: state.game,
    images: state.images,
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actionCreators, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
