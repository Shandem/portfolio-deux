import React from 'react';
import Navbar from './Header/Navbar'
import { Switch, Route } from 'react-router-dom';




export default (
    
<header>

    <NavBar />
        <Switch>

            <Route exact path="/" component={() => <div>Home Page</div>} />
            <Route path="/about" component={() => <div>About Page</div>} />
            <Route path="/services" component={() => <div>Services Page</div>} />
            <Route path="/portfolio" component={() => <div>Portfolio Page</div>} />
            <Route path="/contact" component={() => <div>Contact Page</div>} />

    </Switch>

    </header>>
);


