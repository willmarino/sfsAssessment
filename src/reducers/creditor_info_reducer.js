import {
  RECEIVE_CREDITORS_INFO,
  RECEIVE_CREDITOR_INFO
} from '../actions/creditor_actions';

const CreditorInfoReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_CREDITORS_INFO:
      action.info.forEach(creditor => {
        newState[creditor.id] = creditor;
      })
      return Object.assign({}, state, newState);
    case RECEIVE_CREDITOR_INFO:
      newState = { [action.info.id] : action.info };
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default CreditorInfoReducer;