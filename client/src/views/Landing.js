import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import CitiesImage from '../screen/cities-img.jpg';
import CircleImage from '../screen/circled-right-2.png';

//import PopularItineraries from './PopularItineraries';

export default class Landing extends Component {

    render() {
        return (
            <div className ='main'>
                <Header />
                <NavigationBar />
                <div className='content'>
                    <div className='information'>
                        <div className='information_text' alt='directions-photo'>
                            <img className='cities_img' src={CitiesImage} alt='cities'/>
                            <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
                        </div>
                    </div>
                    <div className='view_cities'>
                        <Link to='/cities'>
                            <img className='circle_menu_img' src={CircleImage} alt='View Cities'/>
                            <p>View Cities</p>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

