<template>
<div class="article-page">
  <div class="banner">
    <div class="container">
      
      <h1>{{article.title}}</h1>

      <div class="article-meta">
        <a><img alt="" /></a>
        <div class="info">
          <a href="" class="author"></a>
          <span class="date">{{ formatDate(article.createdAt) }}</span>
        </div>
      </div>

    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12">
        <p>
          {{article.description}}
        </p>
        <p>{{article.body}}</p>
      </div>
    </div>
  </div>

    <hr />

    <div class="row">

      <div class="col-xs-12 col-md-8 offset-md-2">

        <form class="card comment-form">
          <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            <button class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>
        <Comments v-for="comment in allComments" :key="comment.id" :comment="comment"></Comments>
      </div>

    </div>

  </div>
</template>
<script>
import moment from 'moment';
import Comments from '../components/Comments.vue'
export default {
   components:{
    Comments
  },
  methods : {
    getArticle(slug){
      this.$store.dispatch("articles/getArticle",slug);
    },
    getComments(slug){
      this.$store.dispatch("articles/getComments",slug);
    },
    formatDate(dateString){
      return moment(dateString).format("MMMM Do, YYYY");
    }
  },
  computed: {
    article(){
      return this.$store.state.articles.article || {}
    },
    allComments(){
      return this.$store.state.articles.comments || [];
    }

  },
  created(){
    let slug = this.$router.currentRoute.params.articleSlug;
    this.getArticle(slug);
    this.getComments(slug);
  },
}
</script>