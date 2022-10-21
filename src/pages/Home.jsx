import React from "react";
import { useState, useEffect } from "react";
import { sourceData } from '../../sourceData';

function Home(){
    const [mockData, setMockData] = useState([])
    useEffect(()=>{
        setMockData(sourceData._embedded.events)
    }, [])
    return (
        <div>
            <div className="row">
                {
                    mockData.map((item) => {
                        return(
                            <div className="col-12 col-lg-4 gy-5">
                                <div className="card" style={{width: 'auto'}}>
                                    <img src={item.images[0].url} className="card-img-top" alt="event image" width={305} height={225}/>
                                    <div className="card-body" style={{height:'6rem'}}>
                                        <h5 className="card-title">{item.name}</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span className="me-2"><b>Date:</b>{item.dates?.start?.localDate}</span>
                                            <span><b>Time:</b>{item.dates?.start?.localTime}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span>{item.promoter?.name ? item.promoter?.name : '-'}</span>
                                        </li>
                                        <li className="list-group-item">A third item</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="/" className="card-link">Card link</a>
                                        <a href="/" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;