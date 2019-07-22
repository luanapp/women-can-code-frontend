import { Button, Container, TextField } from '@material-ui/core';
import React, { PureComponent } from 'react';
import { compose, withProps } from 'recompose';
import { equals, isNil } from 'ramda';
import { getUserById, saveUser } from '../../actions/user';

import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import { connect } from 'react-redux';
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
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
});

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(saveUser(user)),
  getUserById: userId => dispatch(getUserById(userId)),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles),
  withProps(({ match: { params: { userId } } }) => ({
    userId: userId !== 'new' ? userId : null,
  }))
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

  componentDidMount() {
    const { userId, getUserById } = this.props;
    if (!isNil(userId)) {
      getUserById(userId);
    }
  }

  componentWillReceiveProps(newProps) {
    const { user: oldUser } = this.state;
    const { user: newUser } = newProps;
    if (!equals(oldUser, newUser)) {
      this.setState({
        user: newUser,
      });
    }
  }

  handleChange = name => event => {
    const { user } = this.state;
    this.setState({ user: Object.assign({}, user, { [name]: event.target.value }) });
  };

  saveUser = () => {
    this.props.saveUser(this.state.user);
  };

  render() {
    const { classes } = this.props;
    const {
      user: { id, name, lastName, username, email },
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
              <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              {isNil(id) ? 'Create User' : 'Save User'}
            </Button>
          </Container>
        </form>
      </Container>
    );
  }
}

export default enhance(EditUser);
