<template>
    <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">Blogpost</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link active" @click="setArticles()">All Feeds</a>
            </li>
          </ul>
        </div>
        <ArticleView v-for="article in globalArticles" :key="article.slug" :article="article"></ArticleView>
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>
          <div class="tag-list">
            <Tags v-for="tag in allTags" :key="tag" :tag="tag"></Tags>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>
<script>
import ArticleView from '../components/ArticleView.vue';
import Tags from '../components/Tags.vue';
export default {
  components:{
    ArticleView,
    Tags
  },
  methods : {
    setArticles(){
      this.$store.dispatch("articles/getAllArticles",null);
    },
    setTags(){
      this.$store.dispatch("articles/getTags");
    }
  },
  computed: {
    globalArticles(){
      return this.$store.state.articles.feed || [];
    },
    allTags(){
      return this.$store.state.articles.tagList || [];
    }
  },
  created(){
    this.setArticles();
    this.setTags();
  }
}
</script>