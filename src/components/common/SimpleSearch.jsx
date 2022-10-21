import React from "react";
import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import {eventResource} from "../../features/event/eventSlice";

function SimpleSearch(){
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState('nba')

    useEffect(()=>{
        dispatch(eventResource({
            keyword: searchText,
            page: 0
        }))
    }, [searchText])

    return(
        <form  className="d-flex col-12 col-lg-4">
            <input type="search" className="form-control me-2"
                   placeholder="search"
                   aria-describedby="search-addon"
                   onChange={(event) => { setSearchText(event.target.value)}}
            />
        </form>
    )
}

export default SimpleSearch;