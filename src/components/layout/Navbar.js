import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const Navbar = (props) => {

    const { auth, profile } = props;

    if (auth.uid) {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Profile</NavLink></li>
                    <li><a onClick={props.signOut}>Log Out</a></li>
                    <li><NavLink to="/" className="btn btn-floating green lighten-1">{props.profile.initials}</NavLink></li>
                </ul>
            </div>
        </nav>
    )
    } else {
        return null
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
