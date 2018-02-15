import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import React from "react"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { rootReducer }  from './reducers/index';
import mainHeader from './components/mainHeader';
import inboxApp from './components/Inbox';
import trashApp from './components/Trash';
import spamApp from './components/Spam';
import {
  Router,
  Route
} from 'react-router-dom';
import './stylesheets/mailBody.css';


const store = createStore(rootReducer);
console.log(store.getState());

const history = createBrowserHistory();

const storeHistory = syncHistoryWithStore(history, store);

ReactDOM.render(
  <Provider store={store} history={storeHistory}>
   <Router history={history}>
      <div className="navHeader">
         <Route path="/" component={mainHeader} history={history}/>
         <Route exact path="/" component={inboxApp} history={history}/>
         <Route exact path="/Inbox" component={inboxApp} />
         <Route exact path="/Trash" component={trashApp} />
         <Route exact path="/Spam" component={spamApp} />
      </div>
   </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
