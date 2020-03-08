import React from 'react';
import styles from './Kitchen.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const kitchenData = [
  {id: '1', table:'6', order:'r12345', products:'XL Pizza', status:'completed'},
  {id: '2', table:'1', order:'r23445', products:'Large Salad', status:'In progress'},
  {id: '3', table:'2', order:'r11111', products:'Small Salad', status:'completed'},
  {id: '4', table:'3', order:'r01122', products:'Small Pizza', status:'ordered'},
  {id: '5', table:'6', order:'ev1122', products:'Small Salad', status:'in progress'},
  {id: '6', table:'2', order:'ev9988', products:'Large Pizza', status:'completed'},
  {id: '7', table:'1', order:'ev4455', products:'Large Salad', status:'In progress'},
  {id: '8', table:'2', order:'rs1200', products:'Large Pizza', status:'completed'},
  {id: '9', table:'3', order:'rs9900', products:'XL Pizza', status:'ordered'},
  {id: '10', table:'6', order:'ev9900', products:'Small Salad', status:'in progress'},
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <h2>Kitchen view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Sequence</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Order Number</TableCell>
          <TableCell>Order Description</TableCell>
          <TableCell>Order Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {kitchenData.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.products}
            </TableCell>
            <TableCell>
              <Button>
                {row.status}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
