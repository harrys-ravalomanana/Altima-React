import React, {useState} from "react";

function ProfessionalBlock(props) {
    return (
        <div className="row">
            <div className="container professional-wrapper">
                <h3 className="h3 h3-title">Professional Services</h3>
                <p className="h3-subtitle">Proin iaculis purus consequat sem cure </p>
                <div className="content-block services-block">
                    <div className="third-block beautiful">
                        <span className="logo-block">&nbsp;</span>
                        <div className="logo-title">Beautiful designs</div>
                        <p className="logo-description">Proin iaculis purus consequat sem cure
                            digni ssim. Donec porttitora entum suscipit
                            aenean rhoncus posuere odio in tincidunt.</p>
                    </div>
                    <div className="third-block responsive">
                        <span className="logo-block">&nbsp;</span>
                        <div className="logo-title">Responsive web</div>
                        <p className="logo-description">Proin iaculis purus consequat sem cure
                            digni ssim. Donec porttitora entum suscipit
                            aenean rhoncus posuere odio in tincidunt.</p>
                    </div>
                    <div className="third-block marketing">
                        <span className="logo-block">&nbsp;</span>
                        <div className="logo-title">Marketing tools</div>
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

export default ProfessionalBlock;

