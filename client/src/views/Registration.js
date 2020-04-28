import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { register } from '../store/actions/authActions';
import { clearErrors } from '../store/actions/errorsActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                name: '',
                // firstName: '',
                // lastName: '',
                // userName: '',
                password: '',
                // picture: '',
                email: '',
            },
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
        if (this.state.submitted === true) {
            return isAuthenticated
        }
    }

    handleChange = (e) => {
        const {newUser} = this.state;
        this.setState({
            newUser: {
                ...newUser,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        this.setState({ submitted: true });
        // const {user} = this.state;
        //console.log(user)
        //console.log( user.firstName.lenght !== 0, user.lastName.lenght !== 0, user.email.lenght !== 0, user.password.lenght !== 0 )
        //if ( user.firstName.lenght !== 0 && user.lastName.lenght !== 0 && user.email.lenght !== 0 && user.password.lenght !==0 ) {
        //if ( user.name.lenght !== 0 && user.email.lenght !== 0 && user.password.lenght !==0 ) {
        const { newUser } = this.state
        console.log(newUser)
        this.props.register(newUser);
    }
    //}

    render() {
        //const { registration } = this.props;
        const { newUser, submitted } = this.state
        return (
            <div className='main'>
                <Header />
                <div className='content'>
                    <div className="col-md-6 col-md-offset-3">
                        <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !newUser.name ? ' has-error' : '')}>
                                <label htmlFor="email">Name</label>
                                <input 
                                    className="form-control"
                                    type="text" 
                                    name="name" 
                                    value={newUser.name} 
                                    onChange={this.handleChange} 
                                />
                                {submitted && !newUser.email &&
                                    <div className="help-block">Name is required</div>
                                }
                            </div>
                            {/* <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    className="form-control"
                                    type="text"  
                                    name="firstName" 
                                    value={user.firstName} 
                                    onChange={this.handleChange} 
                                />
                                {submitted && !user.firstName &&
                                    <div className="help-block">First Name is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    className="form-control"
                                    type="text"  
                                    name="lastName" 
                                    value={user.lastName} 
                                    onChange={this.handleChange} 
                                />
                                {submitted && !user.lastName &&
                                    <div className="help-block">Last Name is required</div>
                                }
                            </div> */}
                            <div className={'form-group' + (submitted && !newUser.email ? ' has-error' : '')}>
                                <label htmlFor="email">Email</label>
                                <input 
                                    className="form-control"
                                    type="text" 
                                    name="email" 
                                    value={newUser.email} 
                                    onChange={this.handleChange} 
                                />
                                {submitted && !newUser.email &&
                                    <div className="help-block">Email is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !newUser.password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input 
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={newUser.password}
                                    onChange={this.handleChange} 
                                />
                                {submitted && !newUser.password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" block='true'>Register</button>
                                {register}
                                <Link to="/" className="btn btn-link">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { ///registration: state.registration.registration };
        isAuthenticated: state.isAuthenticated,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {register: (user) => dispatch(register(user)),
        //register,
        clearErrors
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)