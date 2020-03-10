import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Waiter.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.any,
    updateTable: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  waiterOrderChange(tableId, status){
    this.props.updateTable(tableId, status);
  }

  renderActions(status, tableId){
    switch (status) {
      case 'free':
        return (
          <>
            <Button component={Link} className={styles.button} color="primary" variant="contained"
              onClick={() => { this.waiterOrderChange(tableId, 'thinking'); }}>
          thinking
            </Button>
            <Button component={Link} className={styles.button} color="primary" variant="contained"
              onClick={() => { this.waiterOrderChange(tableId, 'new order'); }}>
          new order
            </Button>
          </>
        );
      case 'thinking':
        return (
          <Button component={Link} className={styles.button} color="primary" variant="contained"
            onClick={() => { this.waiterOrderChange(tableId, 'new order'); }}>
                new order
          </Button>
        );
      case 'ordered':
        return (
          <Button component={Link} className={styles.button} color="primary" variant="contained"
            onClick={() => { this.waiterOrderChange(tableId, 'prepared'); }}>
                prepared
          </Button>
        );
      case 'prepared':
        return (
          <Button component={Link} className={styles.button} color="primary" variant="contained"
            onClick={() => { this.waiterOrderChange(tableId, 'delivered'); }}>
                delivered
          </Button>
        );
      case 'delivered':
        return (
          <Button component={Link} className={styles.button} color="primary" variant="contained"
            onClick={() => { this.waiterOrderChange(tableId, 'paid'); }}>
                paid
          </Button>
        );
      case 'paid':
        return (
          <Button component={Link} className={styles.button} color="primary" variant="contained"
            onClick={() => { this.waiterOrderChange(tableId, 'free'); }}>
                free
          </Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <h2>Waiter view</h2>
          <Button component={Link} className={styles.button} color='primary' variant='outlined'
            to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New Order
          </Button>
          <Button component={Link} className={styles.button} color='primary' variant='outlined'
            to={`${process.env.PUBLIC_URL}/waiter/orders/w123456`}>Edit Order
          </Button>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
