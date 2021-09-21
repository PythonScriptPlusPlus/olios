<template>
	<div class="container page">
		<h1 class="title">
			Shopping Cart
		</h1>
		<div class="wrapper">
			<div class="shop-cart">
				shpcart
			</div>
			<div class="wrap">
				<div class="delivery">
					<delivery />
				</div>
				<div class="promo">
					<promo />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ShoppingCart',
};
</script>

<style lang="scss" scoped>
.page {
	text-align: left;
	font-size: 20px;
}

.title {
	font-weight: 200;
}

.wrapper {
	display: flex;
}

.shop-cart {
	width: 72%;
	height: 600px;
	box-shadow: 0 0 15px $sub-text;
	margin-right: 3%;
}

.wrap {
	width: 25%;
	display: flex;
	flex-direction: column;
}

.delivery {
	height: 400px;
	box-shadow: 0 0 15px $sub-text;
	margin-bottom: 30px;
}

.promo {
	height: 170px;
	box-shadow: 0 0 15px $sub-text;
}
</style>
