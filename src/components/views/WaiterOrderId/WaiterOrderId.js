import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WaiterOrderId.scss';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const WaiterOrderId = () => (
  <Paper className={styles.component}>
    <h2>Waiter Edit Order view</h2>
    <form className={styles.form} noValidate>
      <TextField
        className={styles.textField}
        id='order-input'
        label='waiter order id'
        disabled
        defaultValue='w112233'
      />
      <TextField
        className={styles.textField}
        id='table-data'
        label='Table Number'
        disabled
        defaultValue='3'
      />
      <TextField
        className={styles.textField}
        id='starter-input'
        label='Starter'
        defaultValue = 'Carpaccio'
      />
      <TextField
        className={styles.textField}
        id='main-course-input'
        label='Main Course'
        defaultValue = 'Large Pizza'
      />

      <TextField
        className={styles.textField}
        id='dessert'
        label='Dessert'
        defaultValue = 'Chocolate Fudge Cake'

      />
      <TextField
        className={styles.textField}
        id='drink'
        label='Drink'
        defaultValue = 'Lager'

      />
      <TextField
        className={styles.textField}
        id='price-input'
        label='Total Price'
        defaultValue = '£54.99'
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
      Edit Order
      </Button>
    </div>
  </Paper>
);

export default WaiterOrderId;
