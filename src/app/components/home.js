import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            Hobby: ''
        }
    }
    
    dispHobby(event){
        this.setState({
            Hobby: event.target.value
        });
    }
    appendHobby(){
        this.props.addHobby(this.state.Hobby);
        this.setState({
            Hobby: ''
        });
    }
    render(){
        let initInfo = (
                <div className='container'>
                <p>your name is { this.props.user.Name }</p>
                <p>your age is { this.props.user.Age }</p>
                <div>
                    Hobbies: 
                    <ul>
                        {this.props.user.Hobbies.map((h,i)=><li key={i}>{h}</li>)}
                        <li>{this.state.Hobby}</li>
                    </ul>
                </div>
                </div>
        );
        //console.log(this.props.user);
        return(
            <div>
                <h3>Your Summary</h3>
                {initInfo}
                <div>
                    <p>{this.props.children}</p>
                </div>
                <div className='container'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <input type='text' placeholder='Add a Hobby' value={this.state.Hobby} onChange={(event)=> this.dispHobby(event)}/>
                    </div>
                    <div className='col-sm-1'>
                        <button className='btn btn-primary' onClick={this.appendHobby.bind(this)}>Add</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <button onClick={this.props.decrement} className='btn btn-primary'>Decrement Age</button>
                    </div>
                    <div className='col-sm-2'>
                        <button onClick={this.props.increment} className='btn btn-primary'>Increment Age</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    user : PropTypes.object
}