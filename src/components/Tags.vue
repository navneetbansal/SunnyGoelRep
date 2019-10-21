<template>
    <a class="tag-pill tag-default btn" @click="getArticlesByTag(tag)">{{tag}}</a>
</template>
<script>

export default {
     props: ["tag"],

  methods : {
    getArticlesByTag(tag){
      this.$store.dispatch("articles/getAllArticles",tag);
    }
  }
}
</script>