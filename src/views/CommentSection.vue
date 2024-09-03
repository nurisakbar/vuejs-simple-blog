<template>
    <div>
      <h3>Comments</h3>
      <div v-if="userLoggedIn">
        <textarea v-model="newComment" placeholder="Add a comment"></textarea>
        <button @click="submitComment" class="btn btn-primary">Submit</button>
      </div>
      <div v-else>
        <p>Please <router-link to="/login">login</router-link> to comment.</p>
      </div>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.body }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['articleId'],
    data() {
      return {
        comments: [
          { id: 1, body: 'This is a placeholder comment.' },
          { id: 2, body: 'Another placeholder comment.' }
        ],
        newComment: '',
        userLoggedIn: false // Replace with actual login check
      };
    },
    methods: {
      submitComment() {
        if(this.newComment.trim() === '') return;
        const newComment = {
          id: this.comments.length + 1,
          body: this.newComment
        };
        this.comments.push(newComment);
        this.newComment = '';
      }
    }
  }
  </script>
  