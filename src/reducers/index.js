import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './registerReducer';
import tutorialReducer from './tutorialsReducer';

const rootReducer = combineReducers({
  form: formReducer,
  registerResult: registerReducer,
  tutorials: tutorialReducer
});

export default rootReducer;
