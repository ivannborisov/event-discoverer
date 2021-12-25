import React from 'react';

class Event extends React.Component {

    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p> {this.props.description} </p>
            </div>
        );
    }
}


export default Event;
