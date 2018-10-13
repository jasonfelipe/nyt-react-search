import React from "react";


const SavedArticlesRow = props =>

    <div>
        {props.articles.map((result, index )=> (
            <ul className='card' key={index} >
                <div className='card-title'>
                    {result.articleHeadline}
                </div>
                <div className='card-body'>
                    {result.articleSnippet}
                </div>
                <a target="_blank" className='btn btn-success' href={result.articleUrl}>
                    Link to Article
                </a>
                <button className='btn btn-danger' onClick={() => {props.handleDelete(result.articleHeadline)}}>Delete</button>
            </ul>
        ))}
    </div>

export default SavedArticlesRow