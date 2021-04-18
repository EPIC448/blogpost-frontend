import React from 'react'
// import {Link} from 'react-router-dom'
import { Nav, NavLink } from 'reactstrap';

const NavBar = ( ) => {
    
    return (
        <div>
          <Nav className="mr-auto" navbar>
            <NavLink href="/blog_posts" style={{ paddingRight: '10px' }}> All Blogposts </NavLink>
        </Nav>
          
        <Nav className="mr-auto" navbar>
            <NavLink href="/blog_posts/new" style={{ paddingRight: '10px' }}> Add New BlogPost </NavLink>
        </Nav>

           

        </div>
    )
}

export default NavBar