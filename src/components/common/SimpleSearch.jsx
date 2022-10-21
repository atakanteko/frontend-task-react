import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventResource} from "../../features/event/eventSlice";

function SimpleSearch(){
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        const params ={
            keyword: searchText,
            page: 0
        }
        dispatch(eventResource(params))
        setSearchText('')
    }
    return(
        <form className="input-group" onSubmit={handleSearch}>
            <input type="search" className="form-control rounded-left"
                   placeholder="nba..."
                   aria-describedby="search-addon"
                   onChange={(event) => { setSearchText(event.target.value)}}
            />
            <button type="submit" className="btn btn-outline-primary" >search</button>
        </form>
    )
}

export default SimpleSearch;