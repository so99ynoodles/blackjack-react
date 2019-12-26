import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import { Label } from 'semantic-ui-react';

export default function UserStatus({ user, color = 'grey', className, onError }) {
  return !user || !user.userStats ? (
    <div>{onError}</div>
  ) : (
    <div className={className}>
      <Label as="a" image color={color}>
        <img alt={user.username} src={user.avatar} />
        {user.username}
        <Label.Detail>{`${user.userStats.win + pluralize(' win', user.userStats.win)} ${user
          .userStats.lost + pluralize(' loss', user.userStats.lost)} ${user.userStats.draw +
          pluralize(' draw', user.userStats.draw)}`}</Label.Detail>
      </Label>
    </div>
  );
}

UserStatus.propTypes = {
  user: PropTypes.object,
};
