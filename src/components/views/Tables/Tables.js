import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const tablesData = [
  {id: '1', time: '12:00', tab1: 'john smith', tab2: 'bob jones', tab3: null, tab4: 'eva lopez', tab5: 'lucy lee', tab6: 'maria johnson'},
  {id: '2', time: '12:30', tab1: 'john smith', tab2: 'bob jones', tab3: null, tab4: 'eva lopez', tab5: 'lucy lee', tab6: 'maria johnson'},
  {id: '3', time: '13:00', tab1: 'john smith', tab2: 'bob jones', tab3: null, tab4: 'eva lopez', tab5: null, tab6: 'maria johnson'},
  {id: '4', time: '13:30', tab1: '', tab2: 'bob jones', tab3: null, tab4: 'eva lopez', tab5: null, tab6: 'maria johnson'},
  {id: '5', time: '14:00', tab1: '', tab2: null, tab3: 'lisa mcdonald', tab4: 'eva lopez', tab5: 'richard richards', tab6: 'maria johnson'},
  {id: '6', time: '14:30', tab1: 'chris richardson', tab2: null, tab3: 'lisa mcdonald', tab4: 'chris revill', tab5: 'richard richards', tab6: 'maria johnson'},
  {id: '7', time: '15:00', tab1: null, tab2: null, tab3: 'lisa mcdonald', tab4: null, tab5: 'richard richards', tab6: null},
];

const Tables = () => (
  <Paper className={styles.component}>
    <h2>Tables view</h2>
    <Button component={Link} className={styles.button} color='primary' variant='outlined'
      to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking
    </Button>
    <Button component={Link} className={styles.button} color='primary' variant='outlined'
      to={`${process.env.PUBLIC_URL}/tables/bookings/ev1234`}>Edit Booking
    </Button>
    <Button component={Link} className={styles.button} color='primary' variant='outlined'
      to={`${process.env.PUBLIC_URL}/tables/event/new`}>New Event
    </Button>
    <Button component={Link} className={styles.button} color='primary' variant='outlined'
      to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Edit Event
    </Button>

    <h3> Select date and time</h3>

    <form className={styles.form} noValidate>
      <TextField
        id='date'
        label='Select date'
        type='date'
        defaultValue='2020-03-07'
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id='date'
        label='Select time'
        type='time'
        defaultValue='12:00'
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
          <TableCell>Table 5</TableCell>
          <TableCell>Table 6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tablesData.map(row => (
          <TableRow key={row.id} >
            <TableCell scope='row' component='th'>
              {row.time}
            </TableCell>
            <TableCell>
              {row.tab1 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab1}`}>
                  {row.tab1}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab2 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab2}`}>
                  {row.tab2}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab3 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab3}`}>
                  {row.tab3}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab4 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab4}`}>
                  {row.tab4}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab5 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab5}`}>
                  {row.tab5}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab6 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab6}`}>
                  {row.tab6}
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
