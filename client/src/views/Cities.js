import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CitiesFilter from '../components/CitiesFilter';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

//Redux
import { connect } from 'react-redux';
import { fetchCities } from '../store/actions/cityActions';

class Cities extends Component{

    constructor(props) {
        super(props)
        this.state = {
            filterValue: ''
        }
    } 

    componentDidMount() {
        this.props.fetchCities()
    }

    filterCities = (e) => {
        let filterValue = e.target.value.toLowerCase();
        this.setState({
            filterValue
        });
    }

    renderListOfCities() {
        const {cities, loading, error} = this.props;
        const {filterValue} = this.state;

        return loading ? (
            <h2>LOADING</h2>
        ) : error ? (
            <h2>{error}</h2>    
        ) : (
            <div>
                <ul className='cities_list'>{cities
                    .filter(city => city.city.toLowerCase().search(filterValue) > -1 || city.country.toLowerCase().search(filterValue) > -1)
                    .map((city, index) =>
                        <li className='cities_list_item' key={index}>
                            {/* <img scr={city.image} alt='city_image'/> */}
                            <Link to={`/city/${city.city}`}> {city.city} </Link>
                        </li>)

                    }
                </ul>
            </div>    
        )
    }
    
    render () {
        return (
            <div className='main'>
                <Header />
                <NavigationBar />
                <div className='content'>
                    <CitiesFilter
                        handleChange={this.filterCities}
                    />
                    <div className='list_content' style={{overflow:'auto'}}>
                        {this.renderListOfCities()}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities.cities,
        loading: state.cities.loading,
        error: state.cities.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCities: (city) => dispatch(fetchCities(city))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cities)