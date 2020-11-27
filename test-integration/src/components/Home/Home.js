import React, {useState} from "react";
import ProfessionalBlock from "./ProfessionalServices/ProfessionalServices";
import JustRelaxBlock from "./JustRelax/JustRelax";
import FrameworksBlock from "./Frameworks/Frameworks";

function Home(props) {
    return (
        <React.Fragment>
            <ProfessionalBlock/>
            <JustRelaxBlock/>
            <FrameworksBlock/>
        </React.Fragment>
    )
        ;
}

export default Home;

