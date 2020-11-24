import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = ( ) => {
    
    return (
        <div>
            <Link to='/blog_posts' style={{ paddingRight: '10px' }}> All Blogposts </Link>
            <br></br>
            <br></br>

            <Link to='/blog_posts/new'> Add New BlogPost</Link>

        </div>
    )
}

export default NavBar