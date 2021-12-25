import React from 'react';
import Event from './Event/Event';

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    title: "Event 1",
                    description: "Description 1"
                },
                {
                    title: "Event 2",
                    description: "Description 2"
                }
            ]
        }
    }
   
    render() {
        return (
            <div>
                {this.state.events.map((event, i) => 
                    <div key={i}> <Event title={event.title} description={event.description}/> </div>
                )}
            </div>
        );
    }
}

export default Events;
