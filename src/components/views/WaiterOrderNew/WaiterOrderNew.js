import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WaiterOrderNew.scss';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const WaiterOrderNew = () => (
  <Paper className={styles.component}>
    <h2>Waiter New Order View</h2>
    <form className={styles.form} noValidate>
      <TextField
        className={styles.textField}
        id='table-input'
        label='Table Number'
        type='number'
        inputProps={{ min: 1, max: 6}}
      />
      <TextField
        className={styles.textField}
        id='starter-input'
        label='Starter'
      />
      <TextField
        className={styles.textField}
        id='main-course-input'
        label='Main Course'
      />

      <TextField
        className={styles.textField}
        id='dessert'
        label='Dessert'
      />
      <TextField
        className={styles.textField}
        id='drink'
        label='Drink'
      />
      <TextField
        className={styles.textField}
        id='price-input'
        label='Total Price'
      />
    </form>
    <div>
      <Button
        className={styles.button}
        component={Link}
        to={`${process.env.PUBLIC_URL}/waiter`}
        type='submit'
        variant='contained'
        color='primary'
      >
        Add New Order
      </Button>
    </div>
  </Paper>
);

export default WaiterOrderNew;
