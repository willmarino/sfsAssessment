import { connect } from 'react-redux';
import UnfilledRow from './unfilled_row';
import { addCreditorInfo } from '../../actions/creditor_actions';

const mdp = (dispatch) => ({
  addCreditorInfo : (info) => dispatch(addCreditorInfo(info))
});

export default connect(null, mdp)(UnfilledRow);