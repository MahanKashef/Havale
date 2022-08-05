import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from "framer-motion";

import Home from './Home';
import About from './About';
import Error from './Error';


function AnimatedRoutes() {
    const location = useLocation();
    return(
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>

            <Route path='/' element={<Home />} exact/>
            <Route path='/about' element={<About />} exact/>
            <Route path='*' element={<Error />} exact/>

            </Routes>

        </AnimatePresence>
    )
}

export default AnimatedRoutes;