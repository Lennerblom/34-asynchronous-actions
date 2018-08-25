import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v4';
export default class ChoreForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      chore: '',
      assignedTo: '',
      completed: false,
      assignedDate: Date.now(),
      timesPerWeek: 0,
    };
    const initialState = this.props.chore || this.defaultState;

    this.state = {...initialState}
  }

  onSubmit = (e) => {
      e.preventDefault();
      this.props.onComplete(this.state);
      this.setState({...this.defaultState, id: uuid()});
      console.log(this.state);
  };
  onChange = (e) => {
    const val =
    e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;

  const changedBit = {
    [e.target.name]: val
  };
  this.setState(changedBit);
  }

  render() {
    return(
      <Fragment>
        <fieldset>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
            <label>Chore
            <input name="chore" value = {this.state.chore}/>
            </label>
            <label>Assigned To
            <input name="assignedTo" value = {this.state.assignedTo}/>
            <label>Times Per Week
            <input name="timesPerWeek" type="number" value = {this.state.timesPerWeek}/>
            </label>
            <label>Completed
            <input name="completed" type="checkbox" value = {this.state.completed}/>
            </label>
            </label>
            <button>submit</button>
        </form>
        </fieldset>
      </Fragment>
    );
  
}
}