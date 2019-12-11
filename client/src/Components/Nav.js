import React from 'react'
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
        <div>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/auto">Auto</Link>
                </li>
                <li>
                <Link to="/investment">Investment</Link>
                </li>
                <li>
                <Link to="/realestate">Real Estate</Link>
                </li>
                <li>
                <Link to="/tax">Tax</Link>
                </li>
                <li>
                <Link to="/retirement">Retirement</Link>
                </li>
            </ul>
        </div>
        )
      }
}
export default Nav;

