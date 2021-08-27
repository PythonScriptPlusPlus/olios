<template>
	<div>
		<div class="header"> 
			<h1 class="header__title">
				olios
			</h1>
			<h6 class="header__subtitle">
				newest furniture shop existing
			</h6>
			<button class="btn">
				view more
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MainPage',
};
</script>
<style lang="scss" scoped>
.header {
	margin: 0 auto;
	padding-top: 75px;
	height: 100vh;
	text-transform: uppercase;
	background-image: url(../../public/img/background.png);
	background-size: cover;
	background-position-y: bottom;
	background-position-x: center;

	&__title {
		font-size: 108px;
    	font-weight: 100;
		margin: 0;
	}

	&__subtitle {
		margin: 40px 0px 10px 0px;
		font-size: 18px;
    	font-weight: 100;
	}
}

</style>