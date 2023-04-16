import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './layout/Home/Home';
import Layout from './layout/Layout/Layout';
import Special from './components/Special/Special';
import Details from './layout/Details/Details';


const Views = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/special' element={<Special />} />
                <Route path="/details/:id" element={<Details />} />
            </Route>
        </Routes>
    );
};

export default Views;