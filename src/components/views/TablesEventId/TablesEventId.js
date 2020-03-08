import React from 'react';
import styles from './TablesEventId.scss';
import { Link } from 'react-router-dom';


import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TablesEventId  = () => (
  <Paper className={styles.component}>
    <h2>Event edit view</h2>

    <form className={styles.form} noValidate>
      <TextField
        className={styles.textField}
        id='event-input'
        label='event-id'
        disabled
        defaultValue='ev1234'
      />
      <TextField
        id='date'
        label='Select date'
        type='date'
        size='medium'
        defaultValue='2020-03-07'
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
        defaultValue='12:00'
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        className={styles.textField}
        id='name-input'
        label='Name'
        defaultValue='Bob Smith'
      />
      <TextField
        className={styles.textField}
        id='phone-input'
        label='Phone number'
        defaultValue='1234567890'
      />
      <TextField
        className={styles.textField}
        id='table-input'
        label='Table Number'
        type='number'
        defaultValue='1'
      />
      <TextField
        className={styles.textField}
        id='period-input'
        label='Duration'
        type='number'
        defaultValue='2'
      />
      <TextField
        className={styles.textField}
        id='people-input'
        label='People'
        type='number'
        defaultValue='2'
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
        Edit event ID
      </Button>
    </div>
  </Paper>
);

export default TablesEventId;
