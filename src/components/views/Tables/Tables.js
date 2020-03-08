import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        New Booking
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/r123456`}>
        Edit Booking
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/ev123456`}>Edit Event</Link>
    </div>
  </div>
);

export default Tables;
