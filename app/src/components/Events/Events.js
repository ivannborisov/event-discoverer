import React from 'react';
import Event from './Event/Event';

const API_URL = 'http://localhost:5000'

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [
               
            ]
        }
    }

    componentDidMount() {
        
        fetch(API_URL + '/api/events')
          .then(res => res.json())
          .then(
            (result) => {
                
              this.setState({
                events: result
              });
              console.log(this.state)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error)
              this.setState({
                events: []
              });
            }
          )
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
