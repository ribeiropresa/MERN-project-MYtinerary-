import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className = 'navbar navbar default'>
            <div className = 'container-fluid'>
                <div className = 'navbar-header'>
                    <Link className = 'navbar-brand' to = '/users'>Register</Link>
                    <Link className = 'navbar-brand' to = '/login'>Login</Link>
                </div>
                
            </div>
        </nav>
    );
}

export default NavigationBar
