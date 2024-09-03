<template>
    <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <p class="mt-3">Don't have an account? <router-link to="/register">Register here</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
      // Simulasi login, seharusnya ada API call ke backend untuk autentikasi
      if (this.email === 'user@example.com' && this.password === 'password') {
        const userData = {
          email: this.email,
          token: 'example-token' // Token yang didapat dari backend
        };
        
        // Simpan data pengguna ke localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Redirect ke halaman utama setelah login berhasil
        this.$router.push('/');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    }
  }
  }
  </script>
  