import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Card from '../Card/CardShowcase'




export default (
    
    <Switch>
        <Route exact path='/' />
        <Route path='/card' component={ Card }/>
        
    </Switch>
);


