import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import imageBg from "../../../theme/dist/img/header-bg.jpg";
function Portfolio(props) {
    return (
        <React.Fragment>
            <div className="portfolio-wrapper row">
                <div className="image-bg"><img src={imageBg} alt=""/></div>
                <div className="portfolio-inner container">
                    <div className="text-block">
                        <h2 className="h2 h2-title">Creative digital solutions</h2>
                        <p className="h2-subtitle">Lorem ipsum dolor</p>
                        <a href="#" alt="View portfolio" title="View portfolio" className=" btn btn-red">View
                            portfolio</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
        ;
}

export default Portfolio