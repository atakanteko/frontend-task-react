import React from "react";
import CartItem from "../card/CartItem";

function EventContainer({eventData}){
    return(
        <div className="row">
            {
                eventData.map((item) => {
                    return(
                        <div className="col-12 col-lg-4 gy-5" key={item.id}>
                            <CartItem id={item.id}
                                      imageUrl={item.images[0].url}
                                      name={item.name ? item.name : '-'}
                                      startDate={item.dates?.start?.localDate ? item.dates?.start?.localDate : '-'}
                                      time={item.dates?.start?.localTime ? item.dates?.start?.localTime : '-'}
                                      promoter={item.promoter?.name ? item.promoter?.name : '-'}
                                      price={`${item.priceRanges ? `${item.priceRanges[0].min} $` : 'Not found' }`}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EventContainer;