import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import NewSyllabus from './modules/Syllabus/NewSyllabus'
import MyForm from './modules/MyForm'
import DuxForm from './modules/Form/DuxForm'
import D2Form from './modules/Form/D2Form'
import SubmitValidationForm from './modules/Form/SubmitValidationForm'

import { Provider } from 'react-redux'


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import "babel-polyfill"

//import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'


import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './Sagas'
import {counter} from './Reducers'

const reducers = {
   counter,
   // ... your other reducers here ...
   form: formReducer     // <---- Mounted at 'form'
}

const reducer = combineReducers(reducers)

//saga
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

sagaMiddleware.run(rootSaga)


render((
    <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()} >

  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>
      <Route path="/syllabus/new" component={NewSyllabus}/>
      <Route path="/my-form" component={MyForm}/>
      <Route path="/syllabus/:syllabusId/redux-d2form" component={D2Form}/>
      <Route path="/syllabus/:syllabusId/redux-form" component={DuxForm}/>
      <Route path="/form" component={SubmitValidationForm}/>

    </Route>
  </Router>
  </MuiThemeProvider>
  </Provider>

), document.getElementById('app'))
