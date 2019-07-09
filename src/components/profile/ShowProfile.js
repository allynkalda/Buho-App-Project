import React from 'react'
import { connect } from 'react-redux'

const ShowProfile = ({ profile, auth }) => {
    console.log(profile)
    console.log(auth)

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