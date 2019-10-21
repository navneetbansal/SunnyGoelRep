<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand">Blogpost</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="username" class="nav-link" to="editor">New Post</router-link>
        </li>
        <li v-if="username == null" class="nav-item">
          <router-link class="nav-link" to="login">Sign In</router-link>
        </li>
        <li v-if="username == null" class="nav-item">
          <router-link class="nav-link" to="register">Sign Up</router-link>
        </li>
        <li v-if="username" class="nav-item">
          <a class="nav-link">
            <i class="ion-gear-a"></i>
            &nbsp;{{username}}
          </a>
        </li>
        <li v-if="username" class="nav-item">
          <a class="nav-link" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import Router from "../router";
export default {
  computed: {
    username() {
       return this.$store.getters["users/username"];
    }
  },
  methods: {
   logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("jwtToken");
      Router.push("/login");
    }
  }
};
</script>