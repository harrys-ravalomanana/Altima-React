import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import HeaderTop from "./HeaderTop/HeaderTop";
import Portfolio from "./Portfolio/Portfolio";

function Header(props) {
    return (
        <React.Fragment>
            <HeaderTop/>
            <Portfolio/>
        </React.Fragment>
    )
        ;
}

export default Header