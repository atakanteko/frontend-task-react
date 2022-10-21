import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function SharedLayout(){
    return(
        <section>
            <main className="container-fluid g-0 min-vh-100 position-relative">
                <Header />
                <div className="container g-0 px-5 px-lg-0">
                    <Outlet/>
                </div>
                <Footer />
            </main>
        </section>
    )
}

export default SharedLayout;