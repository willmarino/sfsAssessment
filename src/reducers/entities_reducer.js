import { combineReducers } from 'redux';
import CreditorInfoReducer from './creditor_info_reducer';

const EntitiesReducer = combineReducers({
  creditorInfo : CreditorInfoReducer
});

export default EntitiesReducer;