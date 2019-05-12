import React, { Component } from 'react';
import { Home } from './home';

export class MainHome extends Component {
    constructor(){
        super();
        this.state = {
            userObj : {
                Name: 'maisie',
                Hobbies: ['singing','dancing'],
                Age: 27
            }
        }   
    }
    onIncrement(){
        this.setState({
            userObj: {
                ...this.state.userObj,
                Age: this.state.userObj.Age+1
            }
        })
    }
    onDecrement(){
        this.setState({
            userObj: {
                ...this.state.userObj,
                Age: this.state.userObj.Age-1
            }
        })
    }
    addHobby(hobby){
        var newhobbyArray = this.state.userObj.Hobbies;
        newhobbyArray.push(hobby);
        this.setState({
            userObj: {
                ...this.state.userObj,
                Hobbies: newhobbyArray
            }
        })
    }

    render() { 
        return (
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Home 
                            user={this.state.userObj} 
                            decrement={this.onDecrement.bind(this)}
                            increment={this.onIncrement.bind(this)}
                            addHobby={this.addHobby.bind(this)}>
                            Children go here...
                        </Home>
                    </div>
         );
    }
}
 