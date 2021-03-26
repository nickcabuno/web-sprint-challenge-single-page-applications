import React from 'react' 
import { Link } from 'react-router-dom'

export default function Success() {
    return (
        <div className='friend container'>
            <h1>Lets gooooo pizza on the way</h1>
            <div>
                <Link to="/">
                    <button>
                        Main Menu
                    </button>
                </Link>
            </div>
        </div>
      )
}