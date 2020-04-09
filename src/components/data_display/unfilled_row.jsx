import React from 'react';
import '../../styling/unfilled_row.css';

class UnfilledRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: {
        id: this.props.id,
        creditorName: '',
        firstName: '',
        lastName: '',
        minPaymentPercentage: '',
        balance: '',
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let data = this.state.data;
    data.minPaymentPercentage = parseInt(data.minPaymentPercentage, 10);
    data.balance = parseInt(data.balance, 10);
    this.props.addCreditorInfo(data);
    this.props.close();
  }

  update(field){
    return (e) => {
      let data = this.state.data;
      data[field] = e.currentTarget.value;
      this.setState({ data });
    }
  }

  render(){
    return(
      <div >
        <div className='unfilled-row-inputs table-row-container'>
        <input type="checkbox" className='row-checkbox'/>
          <input className='column-1' type="text" onChange={this.update('creditorName')} value={this.state.data.creditorName}/>
          <input className='column-2' type="text" onChange={this.update('firstName')} value={this.state.data.firstName}/>
          <input className='column-3' type="text" onChange={this.update('lastName')} value={this.state.data.lastName}/>
          <input className='column-4' type="text" onChange={this.update('minPaymentPercentage')} value={this.state.data.minPaymentPercentage}/>
          <input className='column-5' type="text" onChange={this.update('balance')} value={this.state.data.balance}/>
          <div onClick={this.handleSubmit} className='submit-new-row-button'>Confirm</div>
        </div>
      </div>
    )
  }
}

export default UnfilledRow;