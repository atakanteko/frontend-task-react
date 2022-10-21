import * as React from 'react';
import { useParams } from 'react-router-dom';

function EventDetails(){
    let { eventId } = useParams();

    return(
        <div>
            <h1>Event Details: {eventId}</h1>
        </div>
    )
}

export default EventDetails;