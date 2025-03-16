import React from 'react';
import Navbar from './Header/Navbar'
import { Switch, Route } from 'react-router-dom';

import Card from '../Card/CardShowcase'




export default (
    
<<<<<<< HEAD
    <Switch>
        <Route exact path='/' />
        <Route path='/card' component={ Card }/>
        
=======
<header>

    <NavBar />
        <Switch>

            <Route exact path="/" component={() => <div>Home Page</div>} />
            <Route path="/about" component={() => <div>About Page</div>} />
            <Route path="/services" component={() => <div>Services Page</div>} />
            <Route path="/portfolio" component={() => <div>Portfolio Page</div>} />
            <Route path="/contact" component={() => <div>Contact Page</div>} />

>>>>>>> d7be877d48ce213eabe1e3ae57d42e5746aeba39
    </Switch>

    </header>>
);


