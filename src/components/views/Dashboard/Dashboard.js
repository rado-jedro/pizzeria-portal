import React from 'react';
import styles from './Dashboard.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const reservations = [
  {id: '1', name: 'Bob Smith', hour: '12:00', table: '2', duration: '2', order: 'r11111'},
  {id: '2', name: 'Jack Jones', hour: '14:00', table: '1', duration: '3', order: 'r22222'},
  {id: '3', name: 'James Notth', hour: '15:00', table: '4', duration: '4', order: 'r33333'},
  {id: '4', name: 'Amanda Doe', hour: '18:00', table: '3', duration: '5', order: 'r44444'},
  {id: '5', name: 'Lucy Lee', hour: '19:00', table: '2', duration: '2', order: 'r55555'},
];

const events = [
  {id: '1', name: 'Kirsty Smith', hour: '20:00', table: '2', duration: '2', order: 'ev1234'},
  {id: '2', name: 'Jack Jones', hour: '19:00', table: '1', duration: '3', order: 'ev2345'},
  {id: '3', name: 'James Rodriguez', hour: '15:00', table: '4', duration: '4', order: 'ev3456'},
];

const Dashboard = () => (
  <Paper className={styles.component}>
    <h2>Dashboard view</h2>
    <Table className={styles.table}>
      <TableHead>
        <TableRow>
          <TableCell>Summary</TableCell>
          <TableCell>Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            Reservations
          </TableCell>
          <TableCell>
            5
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Events
          </TableCell>
          <TableCell>
            3
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <h3>Reservations</h3>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Start Time</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Order Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reservations.map(row => (
          <TableRow key={row.id}>
            <TableCell component='th' scope='row'>
              {row.id}
            </TableCell>
            <TableCell>
              {row.name}
            </TableCell>
            <TableCell>
              {row.hour}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.duration}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <h3>Events</h3>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Start Time</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Event Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {events.map(row => (
          <TableRow key={row.id}>
            <TableCell component='th' scope='row'>
              {row.id}
            </TableCell>
            <TableCell>
              {row.name}
            </TableCell>
            <TableCell>
              {row.hour}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.duration}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Dashboard;
