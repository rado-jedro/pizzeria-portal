import React from 'react';
import PropTypes from 'prop-types';

import styles from './WaiterOrderId.scss';

const WaiterOrderId = ({match}) => (
  <div className={styles.component}>
    <h2>WaiterOrderId view</h2>
    <h3> WaiterOrder id is: {`${match.params.id}`}</h3>
  </div>
);

WaiterOrderId.propTypes = {
  match: PropTypes.node,
};

export default WaiterOrderId;
