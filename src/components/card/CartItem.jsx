import React from "react";
import {Link} from "react-router-dom";

function CartItem({ id, imageUrl, name, startDate, time, promoter }){
    return(
        <div className="card" style={{width: 'auto'}}>
            <img src={imageUrl} className="card-img-top" alt="event image" width={305} height={225}/>
            <div className="card-body" style={{height:'6rem'}}>
                <h5 className="card-title">{name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="me-2"><b>Date:</b>{startDate}</span>
                    <span><b>Time:</b>{time}</span>
                </li>
                <li className="list-group-item">
                    <span>{promoter}</span>
                </li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <Link to={`event-details/${id}`}>Details</Link>
            </div>
        </div>
    )
}

export default CartItem;