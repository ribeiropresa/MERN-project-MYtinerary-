import React from 'react';
//import { Link } from 'react-router-dom';
import logo from '../images/MYtineraryLogo.png';
//import SignIn from '../screen/sign-in.png';


export default function Header() {
    return (
        <div className = 'top_menus'>
            {/* <div className='profile'>
                <Link to='/users'>
                    <img className='sign_in' src={SignIn} alt='Sign In'/>
                </Link>
            </div>  */}
            <img className='logo' src={logo} alt='Logo' />
        </div>
    )
}
