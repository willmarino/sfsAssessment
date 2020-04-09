// import * as creditorUtil from '../util/creditor_util';
import { reqCreditorInfo } from '../util/creditor_util';

export const RECEIVE_CREDITORS_INFO = 'RECEIVE_CREDITORS_INFO';
export const RECEIVE_CREDITOR_INFO = 'RECEIVE_CREDITOR_INFO';

const receiveCreditorInfo = (info) => {
  return({
    type: RECEIVE_CREDITORS_INFO,
    info
  })
};

export const addCreditorInfo = (info) => ({
  type: RECEIVE_CREDITOR_INFO,
  info
})

export const fetchCreditorInfo = () => dispatch => {
  return reqCreditorInfo()
    .then(res => {
      dispatch(receiveCreditorInfo(JSON.parse(res)));
    })
  };