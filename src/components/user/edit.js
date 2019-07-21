import { Button, Container, TextField } from '@material-ui/core';
import React, { PureComponent } from 'react';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { insertUser } from '../../actions/user';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  insertUser: user => dispatch(insertUser(user)),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
);

class EditUser extends PureComponent {
  state = {
    user: {
      name: '',
      lastName: '',
      username: '',
      email: '',
    },
  };

  handleChange = name => event => {
    const { user } = this.state;
    const newUser = Object.assign({}, user, { [name]: event.target.value });
    console.log(user);
    console.log(newUser);
    this.setState({ user: newUser });
  };

  saveUser = () => {
    console.log(this.state.user);
    this.props.insertUser(this.state.user);
  };

  render() {
    const { classes } = this.props;
    const {
      user: { name, lastName, username, email },
    } = this.state;
    return (
      <Container>
        <form className={classes.container}>
          <TextField
            id="standard-full-width"
            label="Name"
            style={{ margin: 8 }}
            className={classes.textField}
            value={name}
            placeholder="First Name"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('name')}
          />
          <TextField
            id="standard-full-width"
            label="Last Name"
            style={{ margin: 8 }}
            className={classes.textField}
            value={lastName}
            placeholder="Last Name"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('lastName')}
          />
          <TextField
            id="standard-full-width"
            label="Username"
            style={{ margin: 8 }}
            className={classes.textField}
            value={username}
            placeholder="Username"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('username')}
            required
          />
          <TextField
            id="standard-full-width"
            label="E-mail"
            style={{ margin: 8 }}
            className={classes.textField}
            value={email}
            placeholder="E-mail"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('email')}
            required
            type="email"
            autoComplete="email"
          />
          <Container>
            <Button variant="contained" color="primary" onClick={this.saveUser.bind(this)}>
              Save User
            </Button>
          </Container>
        </form>
      </Container>
    );
  }
}

export default enhance(EditUser);
