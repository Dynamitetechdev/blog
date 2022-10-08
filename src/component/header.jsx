import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <div className="nav">
            <div className="logo">Logo</div>

            <div className="navlink">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/addblog'>Add Blog</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;