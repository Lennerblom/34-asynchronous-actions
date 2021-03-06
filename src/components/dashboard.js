import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import ChoreForm from './chore-form';
import {choreCreate, choreDelete, choreUpdate, fetchChores, choreAsyncCreate } from '../lib/ducks';
import ChoreItem from './chore-item';

class Dashboard extends Component {

    addChoreTest() {
        return {name: 'thing'};
    }
  render() {
    return (
       
        <Fragment>
            <h1>Chores App</h1>
           <ChoreForm onComplete={this.props.choreCreate} buttonText='submit'/>
           <button onClick={() => this.props.fetchChores()}>get all async</button>
           <ul>{this.props.chore.map(chore => (
          <ChoreItem chore={chore} key={chore.id} onRemove={this.props.choreDelete} onComplete={this.props.choreUpdate}/>))}
          </ul>
        </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ 
    chore: state.chore,

 });
 const mapDispatchToProps = (dispatch) => ({
     choreCreate: chore => dispatch(choreCreate(chore)),
     choreUpdate: chore => dispatch(choreUpdate(chore)),
     choreDelete: chore => dispatch(choreDelete(chore)),
     fetchChores: chore => dispatch(fetchChores(chore)),
     choreAsyncCreate: chore => dispatch(choreAsyncCreate(chore)),
 });
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);