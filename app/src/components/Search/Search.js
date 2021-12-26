import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { typing } from "../../reducers/search"
import './Search.css';

const Search = () => {
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        
        dispatch(typing({
            query: event.target.value
        }))
    }
   
    return (
        <div className="search">
            <form>
                <label>
                    Search:
                    <input type="text"  onChange={handleChange} />
                </label>
            </form>
        </div>
    );
    
}

export default Search;
