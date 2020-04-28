import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../store/actions/authActions';
import { clearErrors } from '../store/actions/errorsActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''   
            },
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
        if(this.state.submitted === true) {
            return isAuthenticated
        }
    }

    handleChange = (e) => {
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [e.target.name]: e.target.value 
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        console.log(user)
        console.log(user.email.lenght !==0, user.password.length !==0)
        if (user.email.lenght !==0 && user.password.length !==0) {
            this.props.login(user)   
        }
    }    

    render() {
        const { user, submitted } = this.state;
        return (
            <div className='main'>
                <Header />
                <div className='content'>
                    <div className="col-md-6 col-md-offset-3">
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                                <label htmlFor="email">Email</label>
                                <input 
                                    className="form-control" 
                                    type="email"
                                    name="email" 
                                    value={user.email} 
                                    onChange={this.handleChange} 
                                />
                                {submitted && !user.email &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    name="password" 
                                    value={user.password} 
                                    onChange={this.handleChange} 
                                />
                                {submitted && !user.password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                                {login}
                                <Link to="/users" className="btn btn-link">Register</Link>
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
    return { //loggingIn: state.authentication.loggingIn};
        isAuthenticated: state.isAuthenticated,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {login: (user) => dispatch(login(user)),
        //login,
        clearErrors
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
