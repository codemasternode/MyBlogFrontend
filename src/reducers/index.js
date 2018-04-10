import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './registerReducer';
import tutorialReducer from './tutorialsReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  form: formReducer,
  registerResult: registerReducer,
  tutorials: tutorialReducer,
  homeData: homeReducer
});

export default rootReducer;
