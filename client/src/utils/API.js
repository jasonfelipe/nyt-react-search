import axios from "axios";


export default {
  getArticles: function(query) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=80933d96ffc14a869c29ff458c39bca3&sort=newest");
  },
  getSavedArticles: function (query) {
    return axios.get('/api/articles')
  },
  saveArticle: function(articleData){
    return axios.post("/api/articles", articleData);
  },
  deleteArticle: function(id){
    return axios.delete("/api/articles/" + id);
  }
};
