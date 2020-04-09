import React from 'react';
import '../../styling/table_row.css';

class TableRow extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let { creditorName, firstName, lastName, minPaymentPercentage, balance } = this.props.debt;
    return(
      <div className='table-row-container'>
        <input type="checkbox" className='row-checkbox' checked={this.props.checked} onClick={this.props.checkBox}/>
        <div className='column-1'>{creditorName}</div>
        <div className='column-2'>{firstName}</div>
        <div className='column-3'>{lastName}</div>
        <div className='column-4'>{minPaymentPercentage.toFixed(2)}%</div>
        <div className='column-5'>{balance.toFixed(2)}</div>
      </div>
    )
  }
}

export default TableRow;