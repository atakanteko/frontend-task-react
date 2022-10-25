import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { eventDetail } from "../../features/event/eventSlice";

function EventDetails(){
    let { eventId } = useParams();
    const dispatch = useDispatch()
    const { eventDetailData, isLoading, isRejected } = useSelector((store) => store.event);

    useEffect(() => {
        dispatch((eventDetail(eventId)))
    }, [eventId])


    if (eventDetailData === null && isLoading && !isRejected){
        return(
            <div className="d-flex align-items-center justify-content-center">
                <h1>Loading</h1>
            </div>
        )
    }
    else if (eventDetailData === null && isLoading && isRejected){
        return(
            <div className="d-flex align-items-center justify-content-center">
                <h1>No events detail to display.</h1>
            </div>
        )
    }

    return(
        <div>
            <h1>Event Details: {eventId}</h1>
        </div>
    )
}

export default EventDetails;