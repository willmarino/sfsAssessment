import { connect } from 'react-redux';
import DataDisplay from './data_display';
import { fetchCreditorInfo } from '../../actions/creditor_actions';

const msp = (state) => ({
  creditorInfo : state.entities.creditorInfo
});

const mdp = (dispatch) => ({
  fetchCreditorInfo : () => dispatch(fetchCreditorInfo())
});

export default connect(msp, mdp)(DataDisplay);