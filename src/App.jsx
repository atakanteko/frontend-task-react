import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './layout/SharedLayout';
import HomePage from './pages/Home';
import EventDetails from "./pages/event/EventDetails";
import NotFound from "./pages/NotFound";
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<HomePage/>} />
                <Route path="event-details/:eventId" element={<EventDetails />} />
            </Route>
            <Route path='*' element={<NotFound />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App
