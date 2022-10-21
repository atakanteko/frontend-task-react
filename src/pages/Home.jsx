import React from "react";
import { useState, useEffect } from "react";
import CartItem from "../components/card/CartItem";
import { sourceData } from '../../sourceData';

function Home(){
    const [mockData, setMockData] = useState([])
    useEffect(()=>{
        setMockData(sourceData._embedded.events)
    }, [])
    return (
            <div className="row">
                {
                    mockData.map((item) => {
                        return(
                            <div className="col-12 col-lg-4 gy-5">
                                <CartItem id={item.id}
                                          imageUrl={item.images[0].url}
                                          name={item.name}
                                          startDate={item.dates?.start?.localDate}
                                          time={item.dates?.start?.localTime}
                                          promoter={item.promoter?.name ? item.promoter?.name : '-'}
                                />
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Home;