import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/main/Header";

function SharedLayout(){
    return(
        <section>
            <main className="container-fluid g-0 min-vh-100">
                <Header />
                <div className="container g-0 px-5 px-lg-0">
                    <Outlet/>
                </div>
            </main>
        </section>
    )
}

export default SharedLayout;