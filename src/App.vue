<template>
  <div id="app">
    <Header />    
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  created() {},
};
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Rubik&display=swap");
* {
  position: relative;
  padding: 0;
  border: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  font-weight: normal;
  text-decoration: none;
  list-style: none;
  border-collapse: collapse;
  border-spacing: 0;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: default;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
}

input,
textarea {
  cursor: text;
}

a,
a *,
button,
input[type="range"],
input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="radio"],
input[type="checkbox"] {
  cursor: pointer;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
iframe,
a,
img,
form,
label,
ul,
ol {
  display: block;
}
.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding: 20px 5px;
}
</style>
