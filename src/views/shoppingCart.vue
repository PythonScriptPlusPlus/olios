<template>
	<div class="container cart">
		<h1 class="cart__title">
			Shopping Cart
		</h1>
		<div class="cart__wrapper">
			<div class="cart__wrapper__shop-cart">
				shpcart
			</div>
			<div class="cart__wrapper side-bar">
				<div class="side-bar__delivery">
					<delivery />
				</div>
				<div class="side-bar__promo">
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
.cart {
	text-align: left;
	font-size: 20px;

	&__title {
		font-weight: 200;
	}

	&__wrapper {
		display: flex;

		&__shop-cart {
			width: 72%;
			height: 600px;
			box-shadow: 0 0 15px $sub-text;
			margin-right: 3%;
		}
	}

}

.side-bar {
	width: 25%;
	flex-direction: column;

	&__delivery {
	height: 400px;
	box-shadow: 0 0 15px $sub-text;
	margin-bottom: 30px;
	}

	&__promo {
	height: 170px;
	box-shadow: 0 0 15px $sub-text;
	}
}

</style>
