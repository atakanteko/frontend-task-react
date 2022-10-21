import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventResource} from "../../features/event/eventSlice";

function SimpleSearch(){
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchText('')

        const params ={
            keyword: searchText,
            page: 0
        }

        dispatch(eventResource(params))
    }
    return(
        <form onSubmit={handleSearch} className="d-flex col-12 col-lg-4">
            <input type="search" className="form-control me-2"
                   placeholder="nba..."
                   aria-describedby="search-addon"
                   onChange={(event) => { setSearchText(event.target.value)}}
            />
            <button type="submit" className="btn btn-outline-dark text-dark fw-bold text-uppercase bg-white" >search</button>
        </form>
    )
}

export default SimpleSearch;