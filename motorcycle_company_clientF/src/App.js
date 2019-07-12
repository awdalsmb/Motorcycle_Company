import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MotorcycleList from './components/motorcycle/MotorcycleList';
import CustomerList from './components/customer/CustomerList';
import DatePicker from "react-datepicker";


class App extends Component {

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Salon</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/MotorcycleList/">Motorcycles</Nav.Link>
            <Nav.Link href="/CustomerList/">Customers</Nav.Link>
            <Nav.Link href="/Reservation/">Reservation</Nav.Link>
          </Nav>
        </Navbar>
        <div class="jumbotron text-center" role="alert">
        <h1 class="display-4 mb-5">Witaj użytkowniku !</h1>
        <p class="lead">Oto prosta aplikacja do zarządzania motocyklami oraz klientami salonu <strong>DUOS KOŁOS</strong>.</p>
        <hr class="my-4"></hr>
        <div class="alert alert-success" role="alert">
  Bardzo <em>prosta</em> w użyciu, sam się przekonaj !

</div>

      </div>
      </div>
      
    );
  }
}

export default App;
