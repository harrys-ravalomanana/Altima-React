import React, {useState} from "react";

function FrameworksBlock(props) {
    return (
        <div className="row">
            <div className="container framework-wrapper">
                <h3 className="h3 h3-title">Frameworks & tools</h3>
                <p className="h3-subtitle">Proin iaculis purus consequat sem cure </p>
                <div className="services-block flex-center">
                    <div className="third-block reactjs">
                        <div className="top-block">
                            <span className="logo-block">&nbsp;</span>
                        </div>
                        <div className="logo-title">ReactJs</div>
                        <p className="logo-description">Proin iaculis purus consequat sem cure
                            digni ssim. Donec porttitora entum suscipit
                            aenean rhoncus posuere odio in tincidunt.</p>
                    </div>
                    <div className="third-block git">
                        <div className="top-block">
                            <span className="logo-block">&nbsp;</span>
                        </div>
                        <div className="logo-title">Git</div>
                        <p className="logo-description">Proin iaculis purus consequat sem cure
                            digni ssim. Donec porttitora entum suscipit
                            aenean rhoncus posuere odio in tincidunt.</p>
                    </div>
                    <div className="third-block sass">
                        <div className="top-block">
                            <span className="logo-block">&nbsp;</span>
                        </div>
                        <div className="logo-title">Sass</div>
                        <p className="logo-description">Proin iaculis purus consequat sem cure
                            digni ssim. Donec porttitora entum suscipit
                            aenean rhoncus posuere odio in tincidunt.</p>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
}

export default FrameworksBlock;

