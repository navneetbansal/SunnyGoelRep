<template>
    <div class="article-preview">
      <div class="article-meta">
       <img :src="article.author.image" />
        <div class="info">
          <a class="author">{{ article.author.username}}</a>
          <span class="date">{{ formatDate(article.createdAt) }}</span>
        </div>

        <router-link :to="{ name: 'view_article', params: { articleSlug: article.slug}}" class="preview-link">
            <h1>{{ article.title}}</h1>
            <p>{{article.description}}</p>
            <span>read more...</span>
        </router-link>
      </div>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    props: ["article"],
    methods: {
        formatDate(dateString){
            return moment(dateString).format("MMMM Do, YYYY");
        }
    }
}
</script>