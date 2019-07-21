import { Container, Fab } from '@material-ui/core';
import React, { PureComponent } from 'react';
import { deleteUser, getUsers } from '../../actions/user';

import { Add } from '@material-ui/icons';
import { DELETE_USER_MODAL } from '../../constants/modals';
import DeleteModal from './deleteModal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Title from './title';
import UserTable from './table';
import { block } from 'bem-cn';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modal';

const className = block('user-view');

const mapStateToProps = state => {
  return {
    users: state.user.users,
    open: state.modal.modals[DELETE_USER_MODAL],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      return dispatch(getUsers());
    },
    deleteUser: userId => {
      return dispatch(deleteUser(userId));
    },
    toggleModal: () => {
      return dispatch(toggleModal(DELETE_USER_MODAL));
    },
  };
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

class UserPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUsers();
  }

  openDeleteModal(user) {
    this.setState({ userToDelete: user });
    this.props.toggleModal();
  }

  render() {
    const { users, deleteUser, toggleModal, open } = this.props;
    const { userToDelete } = this.state;
    return (
      <Container maxWidth="lg" className={className()}>
        <Title>User List</Title>
        <Fab component={Link} to="/user/new" size="small" color="primary" aria-label="Add User">
          <Add />
        </Fab>
        <UserTable users={users} deleteUser={this.openDeleteModal.bind(this)} />
        <DeleteModal user={userToDelete} open={open} handleClose={toggleModal} handleDelete={deleteUser} />
      </Container>
    );
  }
}

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
};

UserPage.defaultProps = {
  users: [],
};

export default enhance(UserPage);
