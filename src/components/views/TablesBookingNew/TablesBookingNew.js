import React from 'react';
import styles from './TablesBookingNew.scss';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TablesBookingNew = () => (
  <Paper className={styles.component}>
    <h2>New Booking View</h2>
    <form className={styles.form} noValidate>
      <TextField
        id='date'
        label='Select date'
        type='date'
        size='medium'
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id='time'
        label='Select time'
        type='time'
        size='medium'
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        className={styles.textField}
        id='name-input'
        label='Name'
      />
      <TextField
        className={styles.textField}
        id='phone-input'
        label='Phone number'
      />
      <TextField
        className={styles.textField}
        id='table-input'
        label='Table Number'
        type='number'
      />
      <TextField
        className={styles.textField}
        id='period-input'
        label='Duration'
        type='number'
      />
      <TextField
        className={styles.textField}
        id='people-input'
        label='People'
        type='number'
      />
    </form>
    <div>
      <Button
        className={styles.button}
        component={Link}
        to={`${process.env.PUBLIC_URL}/tables`}
        type='submit'
        variant='contained'
        color='primary'
      >
        Add New Booking
      </Button>
    </div>
  </Paper>
);

export default TablesBookingNew;
