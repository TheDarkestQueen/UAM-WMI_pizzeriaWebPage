import React from "react";
import {
    Link
  } from 'react-router-dom';

import menu from '../assets/menu.svg';
import exit from '../assets/exit.svg';

function NavigationBar() {

    return (
        <div className="navbar">
            <div class="container">
                <Link class="main-page" to="/mainPage"> Main Page </Link>

                {/* <img id="mobile-menu" class="mobile-menu" src={menu} alt="navigation"></img> */}
                <nav>
                    {/* <img id="mobile-exit-menu" class="mobile-menu-exit" src={exit} alt="exit navigation"></img> */}
                    <ul class="menu-list">
                        <li><Link to="/pizza"> Pizza </Link></li>
                        <li><Link to="/sauces"> Sauces </Link></li>
                        <li><Link to="/order"> Order </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavigationBar;