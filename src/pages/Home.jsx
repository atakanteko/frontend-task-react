import React from "react";
import EventContainer from "../components/events/EventContainer";
import Spinner from "../components/common/Spinner";
import { useSelector } from "react-redux";


function Home(){
    const { isAnyEventExisted, isLoading, eventData } = useSelector((store) => store.event);

    if(isLoading && !isAnyEventExisted) {
        return (
            <div className="row min-vh-100 d-flex align-items-center justify-content-center">
                <h1 className="text-center">No Events To Display</h1>
            </div>
        )
    }

    return (
        <>
            {
                (isLoading && isAnyEventExisted) ? (
                    <div className="row min-vh-100 d-flex align-items-center justify-content-center">
                        <Spinner />
                    </div>
                ) : <EventContainer eventData={eventData}/>
            }
        </>
    )
}

export default Home;