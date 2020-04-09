import React from 'react';
import Table from './table';
import '../../styling/data_display.css';

class DataDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCreditorInfo();
  }

  render(){
    if(Object.keys(this.props.creditorInfo).length === 0){
      return <p>Loading</p>
    }
    return(
      <div className='data-display-container'>
        <Table creditorInfo={this.props.creditorInfo}/>
      </div>
    )
  }
}

export default DataDisplay;