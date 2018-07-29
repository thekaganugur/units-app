import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';  //index is grapped by default
import UnitsIndex from './components/units_index';
import UnitsNew from './components/units_new';
import UnitShow from './components/unit_show';
import UnitsDelete from './components/units_delete';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//createStore(reducers); //than pass it to provider
//Provider : Makes store available to all containers – Makes avilable to connect() 
//Interacts wiith History libary and decides what to do based on a change inside URL.
ReactDOM.render(  // provides DOM-specific methods  
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/new" component={UnitsNew} />
          <Route path="/modify/:urn" component={UnitShow} />
          <Route path="/delete/:urn" component={UnitsDelete} />
          <Route path="/" component={UnitsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));