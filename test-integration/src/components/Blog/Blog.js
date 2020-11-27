import React from "react";
import blog from './../../theme/dist/json/blog'
import PostType from "./PostType/PostType"

function Blog() {
    if (blog) {
        return (
            <div>
                <div className="row blog-page">
                    <div className="container blog-wrapper">
                        <h3 className="h3 h3-title">Frameworks & tools</h3>
                        <p className="h3-subtitle">Proin iaculis purus consequat sem cure </p>
                        {
                            blog[0].articles.map((r, index) => (
                                    <PostType key={index}  {...r}/>
                                )
                            )
                        }
                    </div>
                </div>

            </div>
        )
    }
    return 'Aucun resultat'
}

export default Blog;

