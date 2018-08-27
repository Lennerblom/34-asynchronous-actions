import React, { Component, Fragment } from 'react';
import ChoreForm from './chore-form';
export default class ChoreItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      expense: false
    }
  }
  updateView = () => {
    this.setState({view: true});
  }
  returnView = () => {
    this.setState({view: false});
  }
  onRemove = () => {
      this.props.onRemove(this.props.chore);
    }
  
 choreUpdate = (chore) => {
  this.props.onComplete(chore);
  }
//   addExpense = () => {
//     this.setState({expense: true});
//   }
//   closeExpense = () => {
//     this.setState({expense: false});
//   }

  render() {
      return(
        <Fragment>
         <div onDoubleClick={this.updateView}>
            <li>
              <h3>Today's Chore: {this.props.chore.chore}</h3>
            </li>
            <li>
              <h3>Assigned to: {this.props.chore.assignedTo}</h3>
            </li>
            </div>
            <button onClick={this.onRemove}>Delete</button>
      {this.state.view && <div><ChoreForm onComplete={this.choreUpdate} chore={this.props.chore} onClick={this.props.returnView} buttonText = 'edit chore'/><button onClick={this.returnView}>cancel update</button></div>}
       
          {/* <button onClick={this.addExpense}>Add an Expense</button>
          <button onClick={this.closeExpense}>Close Expense Form</button>
          {this.state.expense && <ExpenseContainer categoryName={this.props.category.name} onClick={this.props.closeExpense}/>} */}
        </Fragment>
      );
      
  }
}