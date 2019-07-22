import { DeleteForeverOutlined, EditOutlined } from '@material-ui/icons';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { compose, withHandlers } from 'recompose';

import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

const hst = ({ history, id }) => () => history.push(`/user/${id}`);

const enhance = compose(
  withHandlers({
    deleteHandler: ({ deleteUser }) => ({ user }) => () => {
      deleteUser(user);
    },
  })
);

const EditButton = withRouter(({ history, user }) => (
  <IconButton onClick={hst({ history, id: user.id })}>
    <EditOutlined>Edit</EditOutlined>
  </IconButton>
));

const UserTable = ({ users, deleteHandler }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Full Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>E-mail</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {users.map(user => (
        <TableRow key={user.id}>
          <TableCell>{`${user.name} ${user.lastName}`}</TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>
            <EditButton user={user} />
            <IconButton onClick={deleteHandler({ user })}>
              <DeleteForeverOutlined>Delete</DeleteForeverOutlined>
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default enhance(UserTable);
