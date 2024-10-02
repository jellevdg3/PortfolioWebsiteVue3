<template>
	<div class="footer">
		<div class="text-center">
			© {{ new Date().getFullYear() }} My Portfolio. All rights reserved.
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style scoped>
.footer {
	padding: 20px 0;
	background-color: #181818;
	color: #fff;
	text-align: center;
}
</style>
