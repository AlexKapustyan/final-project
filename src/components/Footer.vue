<template>
  <div id="footer">
    <div class="wrap">
      <div>Create by <a href="https://github.com/AlexKapustyan">me</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style scoped>
#footer {
  background-color: #5d5d5d;
	position: fixed;
	left: 0; 
	bottom: 0;
	width: 100%;
}
.wrap {
  justify-content: center;
  font-size: 20px;
  color: #fff;
}

a {
  display: inline;
  border-bottom: 2px solid #fff;
}
</style>