import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './registerReducer';
import tutorialsReducer from './tutorialsReducer';
import homeReducer from './homeReducer';
import tutorialReducer from './tutorialReducer';

const rootReducer = combineReducers({
  form: formReducer,
  registerResult: registerReducer,
  tutorials: tutorialsReducer,
  homeData: homeReducer,
  tutorial: tutorialReducer
});

export default rootReducer;
