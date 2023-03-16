import React from "react";

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