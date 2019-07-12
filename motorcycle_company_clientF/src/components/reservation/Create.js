import React, { Component } from 'react';
import '../../Reservation.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button} from 'react-bootstrap';

class Create extends Component {
    constructor(props){
        super(props);

        this.state = {
            day: '',
            hour: '',
            reservation: {},
            Id_customer: '',
            Id_motocycle: '',
            customers: [],
            motorcycles: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:58952/api/customer')
        .then(res => {
          this.setState({customers: res.data});
          console.log(this.state.customers);
        })

        axios.get('http://localhost:58952/api/motorcycle')
        .then(res => {
        this.setState({motorcycles: res.data});
        console.log(this.state.motorcycles);
        })
      }


    handleInputChange = e => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = e => {
        e.preventDefault();

        let res;
        let g1,g2,g3,g4,g5,g6,g7,g8, g9;
        res = parseInt(res);
        res = 0;

        axios.get("http://localhost:58952/api/Rez/Day/" + this.state.day)
        .then(res => {
            this.setState({reservation: res.data});
            console.log(res.data);
        })

        var interval = setInterval(() => {
            var hour = this.state.hour.split(":");
            hour = parseInt(hour); 

            g1 = this.state.reservation.g8;
            g2 = this.state.reservation.g9;
            g3 = this.state.reservation.g10;
            g4 = this.state.reservation.g11;
            g5 = this.state.reservation.g12;
            g6 = this.state.reservation.g13;
            g7 = this.state.reservation.g14;
            g8 = this.state.reservation.g15;
            g9 = this.state.reservation.g16;

            g1 = parseInt(g1);
            g2 = parseInt(g2);
            g3 = parseInt(g3);
            g4 = parseInt(g4);
            g5 = parseInt(g5);
            g6 = parseInt(g6);
            g7 = parseInt(g7);
            g8 = parseInt(g8);
            g9 = parseInt(g9);

            if(hour === 8)
            {
                if(this.state.reservation.g8 === 1)
                {
                    res = 1;
                }
                else g1 = 1;
            }
            else if(hour === 9)
            {
                if(this.state.reservation.g9 === 1)
                {
                    res = 1;
                }
                else g2 = 1;
            }
            else if(hour === 10)
            {
                if(this.state.reservation.g10 === 1)
                {
                    res = 1;
                }
                else g3 = 1;
            }
            else if(hour === 11)
            {
                if(this.state.reservation.g11 === 1)
                {
                    res = 1;
                }
                else g4= 1;
            }
            else if(hour === 12)
            {
                if(this.state.reservation.g12 === 1)
                {
                    res = 1;
                }
                else g5 = 1;
            }
            else if(hour === 13)
            {
                if(this.state.reservation.g13 === 1)
                {
                    res = 1;
                }
                else g6 = 1;
            }
            else if(hour === 14)
            {
                if(this.state.reservation.g14 === 1)
                {
                    res = 1;
                }
                else g7 = 1;
            }
            else if(hour === 15)
            {
                if(this.state.reservation.g15 === 1)
                {
                    res = 1;
                }
                else g8 = 1;
            }
            else if(hour === 16)
            {
                if(this.state.reservation.g16 === 1)
                {
                    res = 1;
                }
                else g9 = 1;
            }

            if(res === 1)
            {
                alert("The date has been reserved, please choose another one");
            }
            else {
                axios.put('http://localhost:58952/api/Rez/Update/' + this.state.reservation.id, {
                    id: this.state.reservation.id,
                    day: this.state.day,
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
                    axios.post('http://localhost:58952/api/Date/Create/', {
                        id_reservation: this.state.reservation.id,
                        hour: hour,
                        Id_customer: this.state.Id_customer,
                        Id_motocycle: this.state.Id_motocycle,
                    })
                    .then(res => {
                        this.props.history.push("/Reservation");
                    }) 
                })    
            }

            clearInterval(interval);
        }, 800);
    }




  render() {
    return (
        <div className="App">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title text-center mb-5 mt-5">
                        Reservation Create
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
                                <option selected>Choose the customer</option>
                                {this.state.customers.map(c =>
                                    <option value={c.id}>{c.firstName} {c.lastName}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Choose the motocycle</label>
                            <select className="form-control" name="Id_motocycle" onChange={this.handleInputChange}>
                                <option selected>Choose the motocycle</option>
                                {this.state.motorcycles.map(m =>
                                    <option value={m.id}>{m.brand} - {m.model}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Choose the day of the week</label>
                            <select className="form-control" name="day" value={this.state.day} onChange={this.handleInputChange}>
                                <option selected>Choose the day of the week</option>
                                <option>Monday</option>
                                <option>Tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3"></div>
                            <div className="form-group col-md-6">
                                <label>Choose the booking time</label>
                                <select class="form-control" name="hour" value={this.state.hour} onChange={this.handleInputChange}>
                                    <option selected>Choose the booking time</option>
                                    <option>8:00</option>
                                    <option>9:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                     <option>16:00</option> 
                                </select>
                            </div>
                            <div className="form-group col-md-3"></div>
                        </div>
                        <button type="submit" className="btn btn-info">Add reservation</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default Create;
