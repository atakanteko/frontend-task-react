import React from "react";

function SimpleSearch(){
    return(
        <div className="input-group">
            <input type="search" className="form-control rounded-left" placeholder="nba..." aria-label="Search"
                   aria-describedby="search-addon"/>
            <button type="button" className="btn btn-outline-primary">search</button>
        </div>
    )
}

export default SimpleSearch;