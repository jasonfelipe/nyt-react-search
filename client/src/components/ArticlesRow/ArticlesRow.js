import React from "react";


const ArticlesRow = props =>

    <div>
        {props.articles.map(result => (
            <ul className='card' key={result.articleHeadline} >
                <div className='card-title'>
                    {result.articleHeadline}
                </div>
                <div className='card-body'>
                    {result.articleSnippet}
                </div>
                <a target="_blank" className='btn btn-success' href={result.articleUrl}>
                    Link to Article
                </a>
                <button className='btn btn-primary' onClick={() => {props.handleSave(result)}}>Save </button>
            </ul>
        ))}
    </div>

export default ArticlesRow