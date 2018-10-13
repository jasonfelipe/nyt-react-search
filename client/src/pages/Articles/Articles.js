import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron';
import API from "../../utils/API";
import Row from "../../components/Row";
import Container from "../../components/Container";
import ArticlesRow from "../../components/ArticlesRow";
import SavedArticlesRow from "../../components/SavedArticlesRow/SavedArticlesRow";


class Articles extends Component {
    state = {
        articles: [
            {
                articleHeadline: "default",
                articleSnippet: "default",
                articleUrl: "default",
            }
        ],
        saved: []
    };

    componentDidMount() {
        this.loadArticles();
        this.loadSavedArticles();

    }

    loadSavedArticles = () => {
        API.getSavedArticles()
            .then(res => {
                this.setState({
                    saved: res.data
                })
            })
            .catch(err => console.log(err));
    }

    //Loads all the articles
    loadArticles = () => {
        API.getArticles()
            .then(res => {
                const docs = res.data.response.docs;
                const articlesArray = [];

                docs.forEach(element => {
                    articlesArray.push({
                        articleHeadline: element.headline.main,
                        articleSnippet: element.snippet,
                        articleUrl: element.web_url
                    });
                });
                // console.log(articlesArray)

                this.setState({
                    articles: articlesArray
                });

                //Checks the state.
                // console.log(this.state)
            })
            .catch(err => console.log(err));
    };


    handleDelete = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    }

    handleSave = article => {
        API.saveArticle({
            articleHeadline: article.articleHeadline,
            articleSnippet: article.articleSnippet,
            articleUrl: article.articleUrl
        })
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>NYT React Search!</h1>
                </Jumbotron>
                <Container>
                    <h3>Recent Articles</h3>
                    <Row>
                        <ArticlesRow handleSave={this.handleSave} articles={this.state.articles}>
                        </ArticlesRow>
                        {/* <div>

                            {this.state.articles.map(result => (
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
                                    <button className='btn btn-primary' onClick={() => { this.handleSave(result) }}>Save </button>
                                </ul>
                            ))}
                        </div> */}
                    </Row>

                    <h3 className='text-center'>SAVED ARTICLES</h3>
                    {this.state.saved.length ? (
                        <Row>
                            <SavedArticlesRow handleDelete={this.handleDelete} articles={this.state.saved}>
                            </SavedArticlesRow>
                        </Row>) : (
                            <h3 style={{color: 'red'}}className='text-center'>No Saved Articles Found</h3>
                        )}

                </Container>
            </div>
        );
    }
}

export default Articles;