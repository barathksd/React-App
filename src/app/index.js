import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router';
import { MainHome } from './components/mainHome';
import { Rootmain } from './components/rootmain';
import { Temp } from './components/temp';

class App extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <Router>
                <Rootmain>
                    <Switch>
                        <Route exact path='/' component={MainHome}></Route>
                        <Route exact path='/next' component={Temp}></Route>
                    </Switch>    
                </Rootmain>                     
            </Router>
        );
    }
}

render(<App/>,window.document.getElementById('root'));