import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../store/actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <nav onClick={this.props.logout}>Logout</nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return null
}

const mapDispatchToProps = dispatch => {
    return { 
        logout
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)