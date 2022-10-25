import * as React from "react";

function EventDetail({eventDetailData}){
    return(
        <div className="event-detail-cont">
            <div className="card">
                <div className="card-header">
                    Event Detail
                </div>
                <div className="card-body">
                    <h3 className="card-title">{eventDetailData?.name}</h3>
                    <p className="card-text">{eventDetailData?.ticketLimit?.info}</p>
                    <h4 className="text-primary">Price</h4>
                    <h5> Minimum {eventDetailData?.priceRanges[0]?.min}$</h5>
                    <h5> Maximum {eventDetailData?.priceRanges[0]?.max}$</h5>
                    <h4 className="text-primary">Images</h4>
                    <div className="row">
                        {
                            eventDetailData?.images.map((item) => {
                                return(
                                    <div className="col-md-4">
                                        <div className="thumbnail mb-4">
                                            <img src={item.url} alt="Lights" style={{objectFit: 'cover', width: '100%', height:'210px'}}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;