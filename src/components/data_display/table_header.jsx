import React from 'react';
import '../../styling/table_header.css';

class TableHeader extends React.Component{
  constructor(props){
    super(props);
    this.checked = true;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.checked = !this.checked;
    this.props.checkAllBoxes(this.checked);
  }

  render(){
    return(
      <div className='table-header-container'>
        <input type="checkbox" className='row-checkbox' checked={this.checked} onClick={this.handleClick}/>
        <div className='column-1' id='row-header'>Creditor</div>
        <div className='column-2' id='row-header'>First Name</div>
        <div className='column-3' id='row-header'>Last Name</div>
        <div className='column-4' id='row-header'>Min Pay%</div>
        <div className='column-5' id='row-header'>Balance</div>
      </div>
    )
  }
}

export default TableHeader;