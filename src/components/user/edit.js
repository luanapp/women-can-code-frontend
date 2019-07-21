import { Button, Container } from '@material-ui/core';
import React, { PureComponent } from 'react';

class EditUser extends PureComponent {
  render() {
    return (
      <Container>
        <Button variant="contained" color="primary">
          Save User
        </Button>
      </Container>
    );
  }
}

export default EditUser;
