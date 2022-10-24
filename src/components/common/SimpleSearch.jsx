import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventResource} from "../../features/event/eventSlice";
import {setSearchPhrase, setResetCurrentPage} from "../../features/event/eventSlice";

function SimpleSearch(){
    const dispatch = useDispatch()
    const { resetCurrentPage } = useSelector((store) => store.event);

    const [searchText, setSearchText] = useState('nba')

    useEffect(()=>{
        dispatch(setResetCurrentPage())
        dispatch(setSearchPhrase(searchText))
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