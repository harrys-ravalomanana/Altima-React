import React from "react";
import {NavLink} from "react-router-dom";

function PostType(bloc) {
    if (bloc) {

        return (
            <div className="article-item third-block">
                <NavLink className="article-link" to={`/blog/${bloc.slug}`}>
                    <h3 className="article-title"> {bloc.titre.length > 21
                        ? bloc.titre.substr(0, 18) + "..."
                        : bloc.titre}</h3>
                    <div className="article-image zoom-image"><img src={bloc.image} alt="" title=""/></div>
                    <div className='article-desc'>{bloc.description}</div>
                </NavLink>
            </div>
        )
    }
    return
}

export default PostType