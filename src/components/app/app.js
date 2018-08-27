import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createStore from '../../lib/store'
import Dashboard from '../dashboard';
const store = createStore;
console.log('state LOG: ', store.getState())

export default class App extends Component {

    render() {
        return(
            <div>
              <Provider store={store}>
                <BrowserRouter>
                    <div>
                      <Route exact path="/" component={Dashboard}/>
                    </div>
                </BrowserRouter>
              </Provider>
            </div>
        );
    }
}