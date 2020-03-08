import React from 'react';
import PropTypes from 'prop-types';

import styles from './TablesBookingId.scss';

const TablesBookingId = ({match}) => (
  <div className={styles.component}>
    <h2>TablesBookingId view</h2>
    <h3>Booking id is: {`${match.params.id}`}</h3>
  </div>
);

TablesBookingId.propTypes = {
  match: PropTypes.node,
};

export default TablesBookingId;
