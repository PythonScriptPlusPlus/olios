<template>
	<div class="container cart">
		<h1 class="cart__title">
			Shopping Cart
		</h1>
		<div class="cart__wrapper">
			<div
				v-if="items.length"
				class="shop-card"
			>
				<cart-item
					v-for="item in items"
					:key="item.name"
					:product="item"
					@add-to-cart="addToCart"
				/>
			</div>
			<div
				v-else
				class="shop-card"
			>
				<p>
					Your cart is empty. <span
						class="link cart__link"
						@click="changeRoute('/products')"
					>Go shopping</span>
				</p>
			</div>
			<div class="info">
				<p>amount of items: {{ amount }}</p>
				<p class="info__price">
					total: <span class="info__cost">{{ price }}$</span>
				</p>
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
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class ProductCard extends Vue {
	amount = 0
	price = 0
	items = []

	addToCart() {
		console.log('log in shpcart');
	}

	changeRoute(route) {
    	this.$router.push(route).catch(error => {});
    	this.$emit('changeRoute',route);
	}
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
		position: relative;
	}

	&__link {
		font-size: 20px;
		transition: opacity 0.2s;

		&:hover {
			transition: opacity 0.2s;
			opacity: 0.7;
		}
	}
}

.shop-card {
	width: 72%;
	height: 600px;
	box-shadow: 0 0 15px $border-color;
	margin-right: 3%;
	padding: 10px;
}

.info {
	width: calc(72% - 40px);
	border-top: 1px solid $border-color;
	position: absolute;
	bottom: 0px;
	left: 20px;
	display: flex;
	justify-content: space-between;
	
	&__price {
		font-weight: 600;
		text-transform: uppercase;
	}

	&__cost {
			font-weight: 200;
			font-style: italic;
	}
	
}

.side-bar {
	width: 25%;
	flex-direction: column;

	&__delivery {
	padding: 10px;
	height: 400px;
	box-shadow: 0 0 15px $border-color;
	margin-bottom: 30px;
	}

	&__promo {
	height: 170px;
	padding: 10px;
	box-shadow: 0 0 15px $border-color;
	}
}

</style>
