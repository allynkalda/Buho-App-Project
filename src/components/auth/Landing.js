import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Landing = ({ auth }) => {

    if (auth.uid) return <Redirect to='/map' />

    return (
        <div>
        <h2>Landing</h2>
            <Link to='/signup'> <button >Sign up</button></Link>
            <Link to='/login'><button>Log in</button></Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

export default connect(mapStateToProps)(Landing);
