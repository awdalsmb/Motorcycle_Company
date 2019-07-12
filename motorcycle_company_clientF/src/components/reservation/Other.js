import React, { Component } from 'react';
import '../../Reservation.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Inne extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            date: {},
            reservation: {},
            motorcycle: {},
            customer: {}
        }
    }

    componentDidMount() {
        var l = window.location.pathname;
        var l2 = l.split("/");

        axios.get('http://localhost:58952/api/Rez/' + l2[2])
        .then(res => {
            this.setState({reservation: res.data});

            axios.get('http://localhost:58952/api/Date/Rez/' + l2[2] + "/" + l2[3])
            .then(res => {
                this.setState({date: res.data});
                console.log(this.state.date);

                axios.get('http://localhost:58952/api/motorcycle/'+this.state.date.id_motocycle)
                .then(res => {
                    this.setState({ motorcycle: res.data });
                });

                axios.get('http://localhost:58952/api/customer/'+this.state.date.id_customer)
                .then(res => {
                    this.setState({ customer: res.data });
                });
            })
        })
      }

    handleClick(e, id, id2) {
        e.preventDefault();

        let g1,g2,g3,g4,g5,g6,g7,g8, g9;

        g1 = this.state.reservation.g8;
        g2 = this.state.reservation.g9;
        g3 = this.state.reservation.g10;
        g4 = this.state.reservation.g11;
        g5 = this.state.reservation.g12;
        g6 = this.state.reservation.g13;
        g7 = this.state.reservation.g14;
        g8 = this.state.reservation.g15;
        g9 = this.state.reservation.g16;

        if(this.state.date.hour === 8)
            g1 = 0;
        else g1 = parseInt(g1);
        if(this.state.date.hour === 9)
            g2 = 0;
        else g2 = parseInt(g2);
        if(this.state.date.hour === 10)
            g3 = 0;
        else g3 = parseInt(g3);
        if(this.state.date.hour === 11)
            g4 = 0;
        else g4 = parseInt(g4);
        if(this.state.date.hour === 12)
            g5 = 0;
        else g5= parseInt(g5);
        if(this.state.date.hour === 13)
            g6 = 0;
        else g6 = parseInt(g6);
        if(this.state.date.hour === 14)
            g7 = 0;
        else g7 = parseInt(g7);
        if(this.state.date.hour === 15)
            g8 = 0;
        else g8 = parseInt(g8);
        if(this.state.date.hour === 16)
            g9 = 0;
        else g9 = parseInt(g9);

        axios.put('http://localhost:58952/api/Rez/Update/'+ id2, {
            id: id2,
            day: this.state.reservation.day,
            g8: g1,
            g9: g2,
            g10: g3,
            g11: g4,
            g12: g5,
            g13: g6,
            g14: g7,
            g15: g8,
            g16: g9
        })
        .then(res => {
            axios.put('http://localhost:58952/api/Date/Delete/'+ id)
            .then(res => {
                this.props.history.push("/Reservation");
            })  
        })  
    }


  render() {
    return (
        <div className="App">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title text-center mb-5 mt-5">
                        Reservation details
                    </h3>
                </div>
                <div class="panel-body">
                    <table className="table m">
                        <tr>
                            <th className="w">Customer</th>	<td>{this.state.customer.firstName} {this.state.customer.lastName}</td>
                        </tr>
                        <tr>
                            <th className="w">Motorcycle</th>	<td>{this.state.motorcycle.brand} | {this.state.motorcycle.model}</td>
                        </tr>
                        <tr>
                            <th className="w">Day</th>	<td>{this.state.reservation.day}</td>
                        </tr>
                        <tr>
                            <th className="w">Hour</th>	<td>{this.state.date.hour}:00 - {this.state.date.hour+1}:00</td>
                        </tr>
                    </table>
                    <Link to="/Reservation"><button type="button" class="btn btn-secondary m">Back</button></Link>
                    <Link to={`/editReservation/${this.state.date.id_reservation}/${this.state.date.hour}`}><button type="button" class="btn btn-info m">Edit the reservation contact details</button></Link>
                    <button onClick={e => this.handleClick(e, this.state.date.id, this.state.reservation.id)} type="button" class="btn btn-danger m">Delete</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Inne;
