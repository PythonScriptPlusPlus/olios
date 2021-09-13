<template>
	<div>
		<div class="header"> 
			<h1 class="header__title">
				olios
			</h1>
			<h6 class="header__subtitle">
				newest furniture shop template
			</h6>
			<button class="btn header__button">
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
	padding-top: 215px;
	height: 100vh;
	text-transform: uppercase;
	background-image: url(../../public/img/background.png);
	background-size: cover;
	background-position-y: bottom;
	background-position-x: center;

	&__title {
		font-size: 200px;
		padding-right: 12px;
    	font-weight: 200;
		margin: 0;
	}

	&__subtitle {
		margin: 117px 3px 20px 0px;
		letter-spacing: .5px;
		font-size: 33px;
    	font-weight: 200;
	}

	&__button {
		margin-top: 20px;
		margin-right: 6px;
		font-size: 17px;
	}
}

</style>