import md5 from 'md5';
import * as actions from '../actions';
import {
  handleActions
} from 'redux-actions';

const initialUser = {
  username: 'User',
  avatar: `https://gravatar.com/avatar/${md5('User')}?d=identicon`,
  userStats: {
    win: 0,
    lost: 0,
    draw: 0,
  },
};

const user = handleActions({
  [actions.win]: state => {
    return {
      ...state,
      userStats: {
        ...state.userStats,
        win: state.userStats.win + 1
      }
    }
  },
  [actions.lose]: state => {
    return {
      ...state,
      userStats: {
        ...state.userStats,
        lost: state.userStats.lost + 1
      }
    }
  },
  [actions.draw]: state => {
    return {
      ...state,
      userStats: {
        ...state.userStats,
        draw: state.userStats.draw + 1
      }
    }
  }
}, initialUser)

export default user;