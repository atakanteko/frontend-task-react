import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventResource} from "../../features/event/eventSlice";
import {setSearchPhrase} from "../../features/event/eventSlice";

function SimpleSearch(){
    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('')
    const { searchPhrase } = useSelector((store) => store.event);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchPhrase(inputText))
        dispatch(eventResource({
            keyword: inputText,
            page: 0
        }))
    }

    return(
        <form  className="d-flex col-12 col-lg-4" onSubmit={handleSearch}>
            <input type="search" className="form-control me-2"
                   placeholder="search"
                   aria-describedby="search-addon"
                   onChange={(event) => { setInputText(event.target.value)}}
            />
            <button type="submit" className="btn button btn-warning text-black">Search</button>
        </form>
    )
}

export default SimpleSearch;