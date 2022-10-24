import React from 'react';
import {useSelector} from "react-redux";

function Pagination({ currentPage, maxPageLimit, minPageLimit, onPageChange, onNextClick, onPrevClick }){

    const { paginationData } = useSelector((store) => store.event);

    const pages = [];
    for(let i=1 ; i<=paginationData.totalPages; i++){
        pages.push(i);
    }

    const handlePrevClick = ()=>{
        onPrevClick();
    }

    const handleNextClick = ()=>{
        onNextClick();
    }

    const handlePageClick = (e)=>{
        onPageChange(Number(e.target.id));
    }

    const pageNumbers = pages.map(page => {

            if(page <= maxPageLimit  && page > minPageLimit) {
                return(
                    <li key={page} id={page} onClick={handlePageClick}
                        className={currentPage===page ? 'active' : null}>
                        {page}
                    </li>
                );
            }else{
                return null;
            }
        }

    );

    return(
        <div style={{marginBottom:'100px'}} className="pagination-ta">
            <ul className="pageNumbers">
                <li >
                    <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>Prev</button>
                </li>
                {pageNumbers}
                <li>
                    <button onClick={handleNextClick} disabled={currentPage === pages[pages.length-1]}>Next</button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;