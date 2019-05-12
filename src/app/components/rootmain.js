import React, { Component } from 'react';
import { Header } from './header';

export class Rootmain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Header></Header>
                    </div>
                </div>
                <div className='row'>
                    {this.props.children}
                </div>           
            </div>
         );
    }
}
