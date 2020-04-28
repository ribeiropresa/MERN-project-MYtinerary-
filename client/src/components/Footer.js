import React from 'react'
import { Link } from 'react-router-dom';
import Home from '../screen/homeIcon.png';

export default function Footer() {

    return (
        <div className='footer'>
            <Link to='/'>
                <img className='home_img' src={Home} alt='Home'/>
                <p className='footer_text'>Home</p>
            </Link>
        </div>
    )
}

