import React from "react";
import blog from './../../theme/dist/json/blog';
import Sharing from './Sharing/Sharing';

function Article(props) {


    const handleClickOpenPopin = e => {
        e.preventDefault();
        document.body.classList.remove('favoris-open');
        document.body.classList.add('popin-open');
        window.scrollTo({ top: 90, behavior: "smooth" });
    };
    const handleClickClosePopin = e => {
        e.preventDefault();
        document.body.classList.remove('popin-open');
    };

    if (blog && blog[0]) {
        let article_slug = window.location.pathname.split(`blog/`).pop();
        let data = blog[0].articles.filter((it) => it.slug === article_slug);


        const handleAddToFavoris = (e) => {
            e.preventDefault();
            document.body.classList.remove('favoris-open');
            let favoris = '';
            if (localStorage.getItem('FAVORIS') != null) {
                favoris = `${localStorage.getItem('FAVORIS')},${article_slug}`;
            } else {
                favoris = article_slug;
            }

            let favArray = favoris.split(',');

            //Remove duplicates slug from array
            let x = (favArray) => favArray.filter((v, i) => favArray.indexOf(v) === i);
            let res = x(favArray).toString();
            localStorage.setItem('FAVORIS', res);


        };
        return (
            <div>
                <div className="row blog-page">
                    <div className="popin" id="popin">
                        <a href="#" className="btn-close" title="Fermer" onClick={(e) => handleClickClosePopin(e)}>X</a>
                        <Sharing {...data[0]}/>
                    </div>
                    <div className="container framework-wrapper">
                        <h2 className="h2 h3-title">{data[0].titre}</h2>
                        <p className="h3-subtitle">{data[0].soustitre}</p>
                        <div className='article-desc' dangerouslySetInnerHTML={{__html: data[0].contenu}}></div>
                        <div className="btn-wrapper">
                            <a href="#" className="btn btn-grey" title="Ajouter aux favoris"
                               onClick={handleAddToFavoris}>Ajouter aux favoris</a>
                            <a href="#" className="btn btn-grey" title="partager"
                               onClick={handleClickOpenPopin}>Partager</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    return ''
}

export default Article;

