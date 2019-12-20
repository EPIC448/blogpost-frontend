import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    console.log(props)
    return (
        <div>
            <Link to='/blog_posts' style={{ paddingRight: '10px' }}> Blogposts </Link>
            <br></br>
            <br></br>

            <Link to='/blog_posts/new'> Add BlogPost</Link>

        </div>
    )
}

export default NavBar