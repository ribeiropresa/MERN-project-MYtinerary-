import React from 'react';
import ReactDOM from 'react-dom';
//React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//React State Manager aka Redux & Thunk
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers/rootReducer'; 
import thunk from 'redux-thunk';
//Component Routes
import Landing from './views/Landing';
import Cities from './views/Cities';
import Contact from './views/Contact';
import Itineraries from './views/Itineraries';
import LoginForm from './views/LoginForm';
import Registration from './views/Registration';
//General/Main CSS
import '../src/index.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/cities" component={Cities} />
        <Route path="/contact" component={Contact} />
        <Route path="/city/:city" component={Itineraries} />
        <Route path="/login" component={LoginForm} />
        <Route path="/users" component={Registration} /> 
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'))

