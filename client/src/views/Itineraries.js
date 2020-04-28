import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { fetchItineraries } from '../store/actions/itineraryAction';
import { fetchOneCities } from '../store/actions/cityActions';
import CircleImage from '../screen/circled-right-2-reverse.png';

class Itineraries extends Component {

     constructor(props) {
        super(props);
        this.state = {
            city: {
                city: ''
            },
        }
    } 

    componentDidMount() {
        //access to the URL and get the city name
        const city = this.props.match.params.city

        this.props.fetchItineraries(city)
        this.props.fetchOneCities(city)
    }

    renderingListOfItineraries() {
        const{itineraries, loading, error, city, cityIsLoading} = this.props;
        console.log(cityIsLoading)
        return loading && cityIsLoading ? (
            <h2>LOADING</h2>
        ) : error ? (
            <h2>{error}</h2>
        ) : (
            <React.Fragment>
                <div>
                    <ul className = 'city_itineraries'>
                        <li className='city_name'>
                            {city.city}
                        </li>
                    </ul>
                </div>
                <div className = 'itineraries_content' style={{overflow:'auto'}}>
                    <ul className = 'itineraries_list'> {
                        itineraries.map( (itinerary, index) => {
                            return (
                                <li className='itineraries_list_item' key={index}>
                                    {console.log(itinerary)}
                                    {itinerary.title}
                                </li>
                            )
                        })
                    } </ul>
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className='main'>
                <Header />
                <NavigationBar />
                <div className='content'>
                    <div className='list_itineraries_content'>
                        {this.renderingListOfItineraries()}
                    </div>
                    <div className='view_cities'>
                        <Link to='/cities'>
                            <img className='circle_menu_img_reverse' src={CircleImage} alt='View Cities'/>
                            <p>View Cities</p>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itineraries: state.itineraries.itineraries,
        loading: state.itineraries.loading,
        error: state.itineraries.error,
        city: state.cities.city,
        cityIsLoading: state.cities.cityIsLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItineraries: (city) => dispatch(fetchItineraries(city)),
        fetchOneCities: (city) => dispatch(fetchOneCities(city))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries)

