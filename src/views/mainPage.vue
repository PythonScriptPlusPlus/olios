<template>
	<div>
		<div class="header"> 
			<p class="header__title">
				olios
			</p>
			<p class="header__subtitle">
				newest furniture shop existing
			</p>
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
	margin: 0 auto 0 auto;
	padding-top: 75px;
	height: 100vh;
	text-transform: uppercase;
	background-image: url(../../public/img/background.png);
	background-size: cover;
	background-position-y: bottom;

	&__title {
		font-size: 108px;
    	font-weight: 500;
		margin: 0;
	}

	&__subtitle {
		margin: 40px 0px 10px 0px;
		font-size: 18px;
	}
}

</style>