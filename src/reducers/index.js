import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
  form: formReducer,
  registerResult: registerReducer
});

export default rootReducer;
