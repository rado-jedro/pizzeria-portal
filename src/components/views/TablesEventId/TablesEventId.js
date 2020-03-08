import React from 'react';
import PropTypes from 'prop-types';

import styles from './TablesEventId.scss';

const TablesEventId = ({match}) => (
  <div className={styles.component}>
    <h2>TablesEventId view</h2>
    <h3>Event id is: {`${match.params.id}`}</h3>
  </div>
);

TablesEventId.propTypes = {
  match: PropTypes.node,
};

export default TablesEventId;
