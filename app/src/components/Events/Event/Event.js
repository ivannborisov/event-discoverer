import React from 'react';
import './Event.css';

class Event extends React.Component {

    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div className="event-container">
                <h3>{this.props.event.title}</h3>
                <p> {this.props.event.description} </p>
                <p> {this.props.event.date} </p>
                <p> {this.props.event.category} </p>
                <p> {this.props.event.address} </p>
            </div>
        );
    }
}


export default Event;
