import React from "react";
import {NavLink} from "react-router-dom";

function Sharing(bloc) {

    const handleShare = e => {
        e.preventDefault();
        alert('sharing by mail : not implemented')
        /**function to share the post**/
    };
    const handleChangeTitre = () => {
        /**function to use to get the title value**/
    };
    const handleChangeDescription = () => {
        /**function to use to get the Description value**/
    };
    const handleChangeEmail = () => {
        /**function to use to get the Email value**/
    };

    if (bloc) {

        return (
            <div className="sharing-block">
                <form onSubmit={handleShare}>
                    <div className="form-input"><label>Titre</label><input onChange={handleChangeTitre} type="text"
                                                                           name="titre" value={bloc.titre.length > 23
                        ? bloc.titre.substr(0, 20) + "..."
                        : bloc.titre}/></div>
                    <div className="form-input"><label>description</label><input onChange={handleChangeDescription}
                                                                                 name="description" type="text"
                                                                                 value={bloc.description.length > 50
                                                                                     ? bloc.description.substr(0, 47) + "..."
                                                                                     : bloc.description}/>
                    </div>
                    <div className="form-input"><label>Email</label><input onChange={handleChangeEmail} type="email"
                                                                           name="email"/>
                    </div>
                    <input type="submit" value="envoyer" className="btn-sharing btn-contact"/>
                </form>
            </div>
        )
    }
    return
}

export default Sharing