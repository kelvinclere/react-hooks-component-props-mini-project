import React from "react";

function Article(props){
    <article>
        <h3>{props.title}</h3>
        <small>{props.date}</small>
        <p>{props.preview}</p>


    </article>
}

Article.defaultProps = {
    date: "january 1, 2020"
}

export default Article;