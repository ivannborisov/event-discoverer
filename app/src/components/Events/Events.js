import React, { useState, useEffect  } from 'react';
import Event from './Event/Event';
import { useSelector } from 'react-redux';
import './Events.css';

const API_URL = 'http://localhost:5000'

const Events = () => {
    const searchQuery = useSelector((state) => {
        return state.search.value;
    });

    const [events, setEvents] = useState([]);

    useEffect( () => {
        fetchEvents()
    },[searchQuery]);


    const fetchEvents = () => {

        let url = API_URL + '/api/events';

        if (searchQuery.query) {
            url += `?search=${searchQuery.query}`;
        }

        return fetch(url)
            .then(res => res.json())
            .then(
                (result) => {    
                    setEvents(result)
                },
                (error) => {
                    console.log(error)
                    setEvents([]);
                }
            );
    }
      
    return (
        <div className="eventsWrapper">  
            <div className="eventsContainer">
                    {events.map((event, i) => 
                        <div key={i}>
                            <Event event={event}/> 
                        </div>
                    )}
            </div>
        </div>
    )


}



export default Events;
