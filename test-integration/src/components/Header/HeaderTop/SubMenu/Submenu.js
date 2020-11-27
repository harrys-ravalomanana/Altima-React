import React, {useState} from "react";
import blog from './../../../../theme/dist/json/blog';
import {NavLink} from "react-router-dom";

function Submenu() {

    if (localStorage.getItem('FAVORIS') != null) {
        let res = localStorage.getItem('FAVORIS').split(',');
        if (res && res.length > 0) {
            return (
                res.map((r, index) => {
                        let articleInfo = blog[0].articles.filter((it) => it.slug === r);
                        return (
                            articleInfo.map((arr, i) => {
                                return (
                                    <li className="" key={i}>
                                        <NavLink className="article-link" to={`/blog/${arr.slug}`}>
                                            <div className="article-image sub-item-left"><img src={arr.image} width="70"
                                                                                              height="50" alt="" title=""/>
                                            </div>

                                            <div className="sub-item-right"><p
                                                className="article-title"> {arr.titre.length > 23
                                                ? arr.titre.substr(0, 20) + "..."
                                                : arr.titre}</p>
                                                <div className='article-desc'>
                                                    {arr.description.length > 53
                                                        ? arr.description.substr(0, 50) + "..."
                                                        : arr.description}</div>
                                            </div>
                                        </NavLink>
                                    </li>
                                )
                            })
                        )
                    }
                )
            )
        }
    }
    return <li className="text-center"> Aucun article dans le favori </li>
}

export default Submenu;