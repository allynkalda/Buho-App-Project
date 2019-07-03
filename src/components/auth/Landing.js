import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
        <h2>Landing</h2>
            <Link to='/signup'> <button >Sign up</button></Link>
            <Link to='/login'><button>Log in</button></Link>
        </div>
    )
}

export default Landing;
