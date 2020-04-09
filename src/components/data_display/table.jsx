import React from 'react';
import TableHeader from './table_header';
import TableRow from './table_row';
import UnfilledRowContainer from './unfilled_row_container';
import '../../styling/table.css';

class Table extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      checkBoxes : new Array(Object.values(this.props.creditorInfo).length).fill(true),
      errors : '',
      dropRow: null
    }
    this.closeUnfilledRow = this.closeUnfilledRow.bind(this);
    this.addDebt = this.addDebt.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.checkAllBoxes = this.checkAllBoxes.bind(this);
    this.compileTableRows = this.compileTableRows.bind(this);
    this.compileTotalDebt = this.compileTotalDebt.bind(this);
  }


  compileTableRows(){
    let { creditorInfo } = this.props;
    let creditorInfoArr = Object.values(creditorInfo);
    this.allRows = <ul className='table-rows-container'>
      {creditorInfoArr.map((debt, idx) => {
        return (
          <TableRow
            key={idx}
            debt={debt}
            checked={this.state.checkBoxes[idx]}
            checkBox={this.checkBox(idx)}
          />
        )
      })}
    </ul>
  }

  checkBox(idx){
    return (e) => {
      let checkBoxes = this.state.checkBoxes;
      checkBoxes[idx] = !checkBoxes[idx];
      this.setState({ checkBoxes });
    }
  }

  checkAllBoxes(isChecked){
    let checkBoxes = this.state.checkBoxes;
    checkBoxes = checkBoxes.map((val) => (
      isChecked
    ));
    this.setState({checkBoxes});
  }

  compileTotalDebt(){
    this.totalDebt = 0
    for(let i = 0; i < this.state.checkBoxes.length; i++){
      let curDebt = 0;
      if(this.state.checkBoxes[i]){
        curDebt = this.allRows.props.children[i].props.debt.balance;
      }
      this.totalDebt += curDebt;
    }
  }

  addDebt(){
    let dropRow = (this.state.dropRow ? null : <UnfilledRowContainer id={this.state.checkBoxes.length + 1} close={this.closeUnfilledRow}/>)
    this.setState({ dropRow });
  }

  closeUnfilledRow(){
    let checkBoxes = this.state.checkBoxes;
    checkBoxes.push(true);
    this.setState({ dropRow: null, checkBoxes });
  }


  render(){
    this.compileTableRows();
    this.compileTotalDebt();
    debugger;
    return(
      <div className='table-container'>
        <TableHeader checkAllBoxes={this.checkAllBoxes}/>
        {this.allRows}
        {this.state.dropRow}
        <div className='add-footer-row'>
          <div id='add-debt-button' onClick={this.addDebt}>Add Debt</div>
        </div>
        <div className='total-footer-row'>
          <div id='total-row-one'>Total</div>
          <div id='total-row-two'>{this.totalDebt}</div>
        </div>
        <div className='row-counts'>
          <p>Total Row Count : {this.state.checkBoxes.length}</p>
          <p>Check Row Count : {this.state.checkBoxes.filter(el => el).length}</p>
        </div>
        <p>{this.state.errors}</p>
      </div>
    )
  }
}

export default Table;























  // checkBox(idx){
  //   return () => {
  //     let checkedList = this.state.checkedList;
  //     checkedList[idx] = !checkedList[idx];
  //   }
  // }



    // checkAllBoxes(){
  //   this.allRows.forEach((tableRow) => {
  //     tableRow.checkBox();
  //   })
  // }