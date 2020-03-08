import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateStatusTable } from '../../../redux/tablesRedux';
const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTable: (tableId, status) => dispatch(updateStatusTable(tableId, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
