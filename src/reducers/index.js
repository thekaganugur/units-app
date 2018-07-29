import { combineReducers } from 'redux';
import UnitsReducer from './reducer_units';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  units: UnitsReducer,
  form: formReducer
});

export default rootReducer;