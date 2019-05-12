import React from 'react';
import { Link } from'react-router-dom';

export const Header = () => {
        return(
            <nav className='navbar navbar-default'>
                <div className='container'>
                    <div className='nabar-header'>
                        <ul className='nav navbar-nav'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/next'>Next</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );   
}