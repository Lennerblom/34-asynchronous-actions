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

  render() {
      return(
        <Fragment>
         <div onDoubleClick={this.updateView}>
            <li>
              <h3>Thing: {this.props.chore.name}</h3>
            </li>
            <li>
              <h3>ID: {this.props.chore.id}</h3>
            </li>
            </div>
            <button onClick={this.onRemove}>Delete</button>
      {this.state.view && <div><ChoreForm onComplete={this.choreUpdate} chore={this.props.chore} onClick={this.props.returnView} buttonText = 'edit chore'/><button onClick={this.returnView}>cancel update</button></div>}

        </Fragment>
      );
      
  }
}