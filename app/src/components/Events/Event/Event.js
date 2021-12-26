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
                <hr/>
                <p className='additional-info'> Date: 
                    <span>
                        {this.props.event.date}
                    </span>
                </p>
                <p className='additional-info'> Category: 
                    <span>
                        {this.props.event.category}
                    </span>
                </p>
                <p className='additional-info'> Adress:  
                    <span> 
                        {this.props.event.address} 
                    </span>
                </p>
            </div>
        );
    }
}


export default Event;
