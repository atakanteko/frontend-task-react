import React from "react";
import { Link } from 'react-router-dom';

function NotFound(){
    return (
        <div className="container d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template text-center">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home"></span>
                                Take Me Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;