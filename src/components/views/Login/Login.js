import React from 'react';
import styles from './Login.scss';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => (
  <Paper className={styles.component}>
    <h2>Login view</h2>
    <form className={styles.form} noValidate>
      <TextField
        className={styles.textField}
        id='name-input'
        label='Username'
      />
      <TextField
        className={styles.textField}
        id='standard-password-input'
        label='Password'
        type='password'
      />
    </form>
    <div>
      <Button
        className={styles.button}
        component={Link}
        to={`${process.env.PUBLIC_URL}/`}
        type='submit'
        variant='contained'
        color='primary'
      >
        Log in
      </Button>
    </div>
  </Paper>
);

export default Login;
