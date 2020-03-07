import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventId from './components/views/TablesEventId/TablesEventId';
import TablesEventNew from './components/views/TablesEventNew/TablesEventNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Dashboard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables`}
            component={Tables}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/booking/123456`}
            component={TablesBookingId}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/booking/new`}
            component={TablesBookingNew}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/events/123456`}
            component={TablesEventId}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/events/new`}
            component={TablesEventNew}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/waiter`}
            component={Waiter}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/waiter/order/123456`}
            component={WaiterOrderId}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/waiter/order/new`}
            component={WaiterOrderNew}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/kitchen`}
            component={Kitchen}
          />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
