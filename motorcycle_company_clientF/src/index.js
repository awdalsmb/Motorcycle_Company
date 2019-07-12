import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import App from './App';
import MotorcycleList from './components/motorcycle/MotorcycleList';
import EditMotorcycle from './components/motorcycle/EditMotorcycle';
import CreateMotorcycle from './components/motorcycle/CreateMotorcycle';
import ShowMotorcycle from './components/motorcycle/ShowMotorcycle';
import CustomerList from './components/customer/CustomerList';
import EditCustomer from './components/customer/EditCustomer';
import CreateCustomer from './components/customer/CreateCustomer';
import ShowCustomer from './components/customer/ShowCustomer';
import Create from './components/reservation/Create';
import Other from './components/reservation/Other';
import Edit from './components/reservation/Edit';
import CreateWeek from './components/reservation/CreateWeek';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/motorcycleList' component={MotorcycleList} />
            <Route path='/editMotorcycle/:id' component={EditMotorcycle} />
            <Route path='/createMotorcycle' component={CreateMotorcycle} />
            <Route path='/showMotorcycle/:id' component={ShowMotorcycle} />
            <Route path="/customerList" component={CustomerList} />
            <Route path='/editCustomer/:id' component={EditCustomer} />
            <Route path='/createCustomer' component={CreateCustomer} />
            <Route path='/showCustomer/:id' component={ShowCustomer} />
            <Route path='/Reservation' component={CreateWeek} />
            <Route path='/addReservation' component={Create} />
            <Route path='/inneReservation/:id/:h' component={Other} />
            <Route path='/editReservation/:id/:h' component={Edit} />
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
