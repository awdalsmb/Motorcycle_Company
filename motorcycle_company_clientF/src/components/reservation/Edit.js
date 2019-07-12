import React, { Component } from 'react';
import '../../Reservation.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button} from 'react-bootstrap';

class Edit extends Component {
    constructor(props){
        super(props);

        this.state = {
            date: {},
            Id_customer: '',
            Id_motocycle: '',
            customers: [],
            motorcycles: [],
        }
    }


    handleInputChange = e => {
        e.preventDefault();

        const state = this.state.date
        state[e.target.name] = e.target.value;
        this.setState({date:state});

    }

    componentDidMount() {
        var l = window.location.pathname;
        var l2 = l.split("/");

        axios.get('http://localhost:58952/api/Date/Rez/' + l2[2] + "/" + l2[3])
        .then(res => {
            this.setState({date: res.data, Id_customer: res.data.id_customer, Id_motocycle: res.data.id_motocycle});
           // console.log(this.state.Id_customer + "   |   " + this.state.Id_motocycle);
          // console.log(this.state.date);
        })

        axios.get('http://localhost:58952/api/customer')
        .then(res => {
          this.setState({customers: res.data});
        })

        axios.get('http://localhost:58952/api/motorcycle')
        .then(res => {
        this.setState({motorcycles: res.data});
        })
      }

    handleSubmit = e => {
        e.preventDefault();

        var l = window.location.pathname;
        var l2 = l.split("/");

        axios.put('http://localhost:58952/api/Date/Update/' + this.state.date.id, {
            id: this.state.date.id,
            id_reservation: this.state.date.id_reservation,
            hour: l2[3],
            Id_customer: this.state.date.Id_customer == null ? this.state.Id_customer : this.state.date.Id_customer,
            Id_motocycle: this.state.date.Id_motocycle == null ?  this.state.Id_motocycle : this.state.date.Id_motocycle
        })
        .then(res => {
            this.props.history.push("/Reservation");
        }) 
    }




  render() {
    return (
        <div className="App">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title text-center mb-5 mt-5">
                        Reservation Edit
                    </h3>
                </div>
                <div class="panel-body">
                    <h4 class="mb-4">
                        <Button variant="secondary">
                            <Link to="/Reservation" style={{color: '#FFF', textDecoration: 'none'}}>
                            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> 
                                Reservation
                            </Link>
                        </Button>
                    </h4>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                            <label>Choose the customer</label>
                            <select className="form-control" name="Id_customer" onChange={this.handleInputChange}>
                                <option>Choose the customer</option>
                                {this.state.customers.map(c =>
                                   {
                                       switch(c.id) {
                                            case this.state.date.id_customer:
                                                return <option selected value={c.id}>{c.firstName} {c.lastName}</option>
                                            default: 
                                                return <option value={c.id}>{c.firstName} {c.lastName}</option>
                                       }
                                    }
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Choose the motocycle</label>
                            <select className="form-control" name="Id_motocycle" onChange={this.handleInputChange}>
                                <option>Choose the motocycle</option>
                                {this.state.motorcycles.map(m =>
                                    {
                                        switch(m.id) {
                                            case this.state.date.id_motocycle:
                                                return <option selected value={m.id}>{m.brand} - {m.model}</option>
                                            default: 
                                                return <option value={m.id}>{m.brand} - {m.model}</option>
                                        }
                                    }
                                )}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-info">Edit the reservation contact details</button>
                    </form>
                </div>
            </div> 
        </div>
    );
  }
}

export default Edit;
