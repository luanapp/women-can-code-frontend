import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { compose, withHandlers } from 'recompose';

import PropTypes from 'prop-types';
import React from 'react';

const enhance = compose(
  withHandlers({
    confirmDelete: ({ handleDelete, handleClose }) => userId => () => {
      handleDelete(userId);
      handleClose();
    },
  })
);

const DeleteModal = ({ user, open, handleClose, confirmDelete }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Delete confirmation</DialogTitle>
    <DialogContent>
      <DialogContentText>{`Are you sure you want to delete the user ${user.username}?`}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={confirmDelete(user.id)} color="primary">
        Yes
      </Button>
      <Button onClick={handleClose} color="primary" autoFocus>
        No
      </Button>
    </DialogActions>
  </Dialog>
);

DeleteModal.propTypes = {
  user: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
};

DeleteModal.defaultProps = {
  open: false,
  user: {},
};

export default enhance(DeleteModal);
