<template>
  <div class="not-found">
    <div class="nf">
			<h1>404</h1>
			<p>Not Found</p>
			<p>The resource requested could not be found on this server!</p>
		</div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style lang="scss">
.not-found {	
		display: flex;
		justify-content: center;
  .nf {
		margin-top: 10%;
		text-align: center;

		h1 {
			font-size: 200px;
			font-weight: 600;
		}
		p {
			font-size: 40px;
			font-weight: 600;
		}
		p:last-child {
			font-size: 18px;
			font-weight: 400;
		}
	}
}
</style>
