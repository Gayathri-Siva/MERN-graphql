import React from 'react';
import { NavLink,Link } from 'react-router-dom';

import AuthContext from '../../context/auth-context';


const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <nav className="nav-wrapper teal ">
          <div className="container">
            <Link to='/' className="brand-logo left">EasyEvents</Link>

            <ul className="right">
              {!context.token && (
                <li>
                  <NavLink to="/auth">Authenticate</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/bookings">Bookings</NavLink>
                  </li>
                  <li>
                    <a href="#" className="waves-effect waves-light btn-small" onClick={context.logout}>Logout
                    <i className="material-icons right">exit_to_app</i>
                    </a>
                  </li>
                </React.Fragment>
              )}
            </ul>
            </div>
          </nav>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;
