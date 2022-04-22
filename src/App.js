import React,{Suspense} from 'react'
import Home from "./components/home/Home";
import Jogs from "./components/jogs/Jogs";
import Contact from "./components/contact/Contact";
import {Routes, Route, useLocation} from 'react-router-dom'
import NotFound from "./components/NotFound/NotFound";
import Info from "./components/info/Info";
import Layout from "./Layout/header/Layout";
import Login from "./components/login/Login";
import Register from "./components/register/Register";


function App() {
    const location = useLocation()
  return (
    <div className="App">
        <Suspense fallback="Loading...">
            {
                location.pathname !== '/login' && location.pathname !== '/register' ? <Layout/> : ''
            }
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/jogs"  element={<Jogs/>}/>
            <Route path="/contact"  element={<Contact/>}/>
            <Route path="/info"  element={<Info/>}/>
            <Route path="/login"  element={<Login/>}/>
            <Route path="/register"  element={<Register/>}/>
            <Route path="*"  element={<NotFound/>}/>
        </Routes>
        </Suspense>
    </div>
  );
}

export default App;
