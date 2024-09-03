<template>
    <div class="container">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
      <comment-section :article-id="article.id"></comment-section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        article: {}
      };
    },
    created() {
      const articleId = this.$route.params.id;
      axios.get(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
        .then(response => {
          this.article = response.data;
        });
    }
  }
  </script>
  