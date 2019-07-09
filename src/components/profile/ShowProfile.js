import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const ShowProfile = ({ profile, auth }) => {
        
        if (!auth.uid) return <Redirect to='/' />

        return (
            <div>
                <h3>My Profile</h3>
                <img src={profile.photoURL} />
                <p>First Name: {profile.firstName}</p>
                <p>Last Name: {profile.lastName}</p>
                <p>Email: {auth.email}</p>
            </div>
        )
    }


const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }

export default connect(mapStateToProps)(ShowProfile)