import React, {useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import logo from "../../../theme/dist/img/altima-logo.png";
import SubMenu from "./SubMenu/Submenu";

function HeaderTop(props) {
    const [favoris, SetFavoris] = useState([]);

    const handleClickMenu = e => {
        e.preventDefault();
        document.body.classList.toggle('menu-open');
    };
    const handleFavoris = e => {
        e.preventDefault();
        e.stopPropagation();
        if (localStorage.getItem('FAVORIS') != null) {
            // used to update the list
            SetFavoris(localStorage.getItem('FAVORIS').split(','));
        }
        document.body.classList.toggle('favoris-open');

    };
    let history = useHistory();
    history.listen(() => {
        document.body.classList.remove('favoris-open');
        document.body.classList.remove('menu-open');
    })

    return (
        <div className="row header-fixed">
            <div className="container header">
                <div className="logo">
                    <NavLink className="nav-item" to="/">
                        <img src={logo} title="" alt="test integration" width="50" height="50"/>
                        <span>Test integration</span>
                    </NavLink>
                </div>
                <div className="toggle-menu only-mobile" onClick={handleClickMenu}>MENU</div>
                <div className="nav-block">
                    <ul>
                        <li><NavLink className="nav-item" to="/">
                            Home
                        </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item" to="/blog">
                                Blog
                            </NavLink></li>
                        <li>
                            <NavLink className="nav-item" to="/">
                                Portfolio
                            </NavLink></li>
                        <li>
                            <NavLink className="nav-item" to="/">
                                Contact
                            </NavLink></li>
                        <li>
                            <NavLink className="nav-item favori" to="/" onClick={handleFavoris}>
                                &nbsp;
                            </NavLink>
                            <ul className="favoris-sub-nav">
                                <SubMenu/>
                            </ul>

                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}


export default HeaderTop