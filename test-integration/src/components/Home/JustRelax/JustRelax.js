import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import imageBg from "../../../theme/dist/img/sea-bg.jpg";

function JustRelaxBlock(props) {
    return (
        <div className="just-relax-block">
            <div className="left-bg">&nbsp;
            </div>
            <div className="right-bg relax-wrapper row">
                <div className="relax-inner">
                    <div className="text-block">
                        <h2 className="h3 h3-title">Just relax <span>&</span><br/>
                            let us do the heavy lifting</h2>
                        <p className="h3-subtitle">Proin iaculis purus consequat sem cure digni ssim. Donec
                            porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.</p>

                        <ul className="relax-check">
                            <li>Initial Setup & Customizations</li>
                            <li>Regular Updates</li>
                            <li>Round The Clock Support</li>
                        </ul>
                        <a href="#" alt="Learn more" title="Learn more" className=" btn btn-red">Learn more</a>
                    </div>
                </div>
                <div className="image-bg"><img src={imageBg} alt=""/></div>
            </div>
        </div>
    )
        ;
}

export default JustRelaxBlock