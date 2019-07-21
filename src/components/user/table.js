import { DeleteForeverOutlined, EditOutlined } from '@material-ui/icons';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { compose, withHandlers } from 'recompose';

import PropTypes from 'prop-types';
import React from 'react';

const enhance = compose(
  withHandlers({
    deleteHandler: ({ deleteUser }) => ({ user }) => () => {
      deleteUser(user);
    },
    editHandler: ({ editUser }) => ({ userId }) => () => editUser(userId),
  })
);

const UserTable = ({ users, deleteHandler, editHandler }) => (
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
            <IconButton onClick={editHandler}>
              <EditOutlined>Edit</EditOutlined>
            </IconButton>
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
  editHandler: PropTypes.func.isRequired,
};

export default enhance(UserTable);
