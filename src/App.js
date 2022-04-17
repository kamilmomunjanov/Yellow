import React,{Suspense} from 'react'
import Home from "./components/home/Home";
import Jogs from "./components/jogs/Jogs";
import Contact from "./components/contact/Contact";
import {Routes, Route, NavLink} from 'react-router-dom'
import NotFound from "./components/NotFound/NotFound";
import Info from "./components/info/Info";
import Layout from "./Layout/header/Layout";


function App() {
  return (
    <div className="App">
        <Suspense fallback="Loading...">
            <Layout/>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/jogs"  element={<Jogs/>}/>
            <Route path="/contact"  element={<Contact/>}/>
            <Route path="/info"  element={<Info/>}/>
            <Route path="*"  element={<NotFound/>}/>
        </Routes>
        </Suspense>
    </div>
  );
}

export default App;
