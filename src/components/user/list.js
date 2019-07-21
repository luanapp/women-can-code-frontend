import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { block } from 'bem-cn';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/user';

const className = block('chat-view');

const mapStateToProps = state => {
  return {
    users: state.user.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      return dispatch(getUsers());
    },
  };
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

class UserList extends PureComponent {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className={className()}>
        {users.map(user => (
          <div>
            <span>{user.name}</span>
            <span>{user.lastName}</span>
          </div>
        ))}
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

UserList.defaultProps = {
  users: [],
};

export default enhance(UserList);
