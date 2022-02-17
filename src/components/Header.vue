<template>
  <div id="header" class="header">
    <div class="wrap">
      <div class="logo">
        <router-link to="/">MyBlog.com</router-link>
      </div>
      <ul>
        <li>
          <router-link class="li" to="/admin-panel">Admin Panel</router-link>
        </li>
        <li>
          <router-link class="li" to="/about-author">About Autor</router-link>
        </li>
        <li>
          <router-link class="li" to="/">Sign In</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
};
</script>

<style scoped>
.header {
  background-color: #397db4;
  color: #fff;
}

.logo {
  font-size: 30px;
}

ul {
  display: flex;
}
li {
  margin-left: 20px;
}
.li:hover {
  display: inline;
  border-bottom: 2px solid #fff;
}
</style>