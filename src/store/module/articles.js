import {api} from '../api.js';
export default{
    namespaced: true,
    state: {
        feed: [],
        tagList: [],
        count: 0,
        article : {},
        comments : []
    },
    mutations: {
        setArticles(state, { articles, articlesCount }){
            state.feed = articles;
            state.count = articlesCount;
        },
        setTags(state,{ tags }){
            state.tagList = tags;
        },
        setArticle(state,{ article }){
            state.article = article;
        },
        setComments(state,{ comments }){
            state.comments = comments;
        }
    },
    actions: {
         async getAllArticles({ commit },tag){
            let route = "/articles";
            route += tag ? `?tag=${tag}` : "";
            const response  = await api.get(route);
            commit("setArticles", response.data);
        },
        async getTags({commit}){
            let route = "/tags";
            const response  = await api.get(route);
            commit("setTags", response.data);
        },
        async getArticle({ commit },slug){
            let route = "/articles";
            route += `/${slug}`;
            const response  = await api.get(route);
            commit("setArticle", response.data);
        },
        async getComments({ commit },slug){
            let route = `/articles/${slug}/comments`;
            const response  = await api.get(route);
            commit("setComments", response.data);
        },
        async createNewArticle({ commit }, {title,description, body}){
            const response = await api.post("/articles", {
                article: {
                    title,
                    description,
                    body
                }
            });
            if(response.data){
               console.log(response.data);
               commit("setArticle", response.data);
            }
        }
    }
}