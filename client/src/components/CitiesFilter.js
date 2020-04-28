import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';

export default class CitiesFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityFilter: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
        this.onChange(e.target.value)
    }
    
    render() {
        return (
            <form>
                <div className='cities_page'>
                    <input 
                        type = 'text'
                        name = 'city'
                        placeholder = 'Search itinerary..'
                        // value={this.state.cityFilter}
                        onChange = {this.props.handleChange}
                    />
                    <button variant="contained" color="primary" type='submit'>
                        Route
                    </button>
                </div>    
            </form>  
        )
    }
}
