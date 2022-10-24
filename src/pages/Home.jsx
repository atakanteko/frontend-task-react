import React from "react";
import EventContainer from "../components/events/EventContainer";
import Spinner from "../components/common/Spinner";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../components/pagination/Pagination";
import {useState, useEffect} from "react";
import {eventResource} from "../features/event/eventSlice";
function Home(){
    const dispatch = useDispatch()
    const { isAnyEventExisted, isLoading, eventData, searchText } = useSelector((store) => store.event);
    const { resetCurrentPage } = useSelector((store) => store.event);

    const pageNumberLimit = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);

    const onPageChange= (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    const onPrevClick = ()=>{
        if((currentPage-1) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev=> prev-1);
    }

    const onNextClick = ()=>{
        if(currentPage+1 > maxPageLimit){
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLimit(minPageLimit + pageNumberLimit);
        }
        setCurrentPage(prev=>prev+1);
    }

    useEffect(()=>{
        dispatch(eventResource({
            keyword: searchText,
            page: currentPage
        }))

    },[currentPage]);

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
            <Pagination currentPage={currentPage}
                        maxPageLimit={maxPageLimit}
                        minPageLimit={minPageLimit}
                        onPrevClick={onPrevClick}
                        onNextClick={onNextClick}
                        onPageChange={onPageChange}/>
            />
        </>
    )
}

export default Home;