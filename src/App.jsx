import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/projects' element = {<Projects/>}/>
                <Route path='/contact' element = {<Contact/>} />
            </Routes>
        </Router>
    )
}
export default App