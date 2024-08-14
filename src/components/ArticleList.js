import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

export default function ArticleList (){
    const data = blogData.posts;
    return (
        <main>
            {data.map(post => (
                <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
            ))}
    </main>
    )
}