import React from "react";
import {useEffect,useState} from "react";
import EventContainer from "../components/events/EventContainer";
import Spinner from "../components/common/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {eventResource} from "../features/event/eventSlice";
import Pagination from "../components/pagination/Pagination";

function Home(){
    const dispatch = useDispatch()
    const { isAnyEventExisted, isLoading, eventData, searchPhrase } = useSelector((store) => store.event);

    const pageNumberLimit = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);

    const onPrevClick = ()=>{
       if((currentPage-1) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev=> prev-1);
    }

    const onPageChange = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }
    const resetCurrentPage = ()=>{
        setCurrentPage(1);
    }

    const onNextClick = ()=>{
        if(currentPage+1 > maxPageLimit){
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLimit(minPageLimit + pageNumberLimit);
        }
        setCurrentPage(prev=>prev+1);
    }


    useEffect(() => {
        dispatch(eventResource({
            keyword: searchPhrase,
            page: (currentPage-1)
        }))
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1)
    }, [searchPhrase]);

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
            <Pagination maxPageLimit={maxPageLimit}
                        minPageLimit={minPageLimit}
                        currentPage={currentPage}
                        onPrevClick={onPrevClick}
                        onNextClick={onNextClick}
                        onPageChange={onPageChange}
                        resetCurrentPage={resetCurrentPage}
            />
        </>
    )
}

export default Home;