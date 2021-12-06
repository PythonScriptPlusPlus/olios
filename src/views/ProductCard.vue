<template>
	<div class="card">
		<div class="item">
			<div
				class="counter"
				@click="markProduct"
			>
				<p class="counter__likes">
					{{ like }}
				</p>
				<div
					class="counter__mark"
					:style="marked ? 'background-image: url(/img/icons/heart-filled.png);' : ''"
				/>
			</div>
			<div class="item__wrapper">
				<img
					src="/img/white_chair.png"
					alt="item image"
					class="item__img"
				/>
			</div>
			<div class="properties">
				<div class="properties__wrapper">
					<div class="properties__plus" />
					<div class="properties__minus" />
				</div>
				<div class="properties__wrapper">
					<div class="properties__pin" />
					<div class="properties__search" />
				</div>
			</div>
		</div>
		<div class="recomended">
			<p class="recomended__header">
				recomended
			</p>
			<div class="recomended__wrapper">
				<div
					v-for="item in items"
					:key="item.name"
					class="items"
				>
					<div
						class="items__img"
						:style="item.img"
					/>
					<p class="items__name">
						{{ item.name }}
					</p>
					<p class="items__description">
						{{ item.description }}
					</p>
				</div>
			</div>
		</div>
		<div class="info">
			<div class="info__header">
				<h1 class="title">
					products
				</h1>
				<div class="category">
					<p
						class="category__name"
					>
						{{ title }}
					</p>
					<div class="category__img" />
				</div>
			</div>
			<div class="info__main">
				<p class="info__name">
					{{ name }} <span class="info__section"> - office</span>
				</p>
				<p class="info__description">
					Sint officia sunt ex velit duis excepteur ea id tempor in.Culpa consectetur qui laboris sint eiusmod nisi dolore.
				</p>
				<div class="bottom">
					<div class="info__wrapper">
						<p class="info__price">
							cost
						</p>
						<p class="info__sale">
							$65 <span class="info__original-cost">$90</span>
						</p>
					</div>
					<div class="info__wrapper">
						<p class="info__price">
							quantity
						</p>
						<input
							v-model="amount"
							type="number"
							class="info__amount"
						/>
					</div>
					<button
						class="btn info__adding"
						@click="addToCart"
					>
						add to cart
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class ProductCard extends Vue {
    @Prop({type: String, default: 'living room'}) title

    like = 495
    marked = false

    markProduct() {
    	this.marked ? this.like-- : this.like++;
    	this.marked = !this.marked;
    }

    name = 'white seat'
    amount = 1
    items = [
    	{
    		name: 'dark seat',
    		description: 'Lorem ipsum dolor sit amet',
    		img: 'background-image: url(/img/grey_seat.png)'
    	},
    	{
    		name: 'blue seat',
    		description: 'Lorem ipsum dolor sit amet',
    		img: 'background-image: url(/img/blue_seat.png)'
    	},
    	{
    		name: 'read seat',
    		description: 'Lorem ipsum dolor sit amet',
    		img: 'background-image: url(/img/red_seat.png)'
    	},
    ]
    addToCart() {
    	this.$emit('add-to-cart');
    }
}
</script>

<style lang="scss" scoped>
.bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}
.info {
    margin-top: 50px;
    padding-left: 50px;
    text-align: left;
    display: grid;
    grid-template-rows: 50px auto;

    &__main {
        align-self: center;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 130px;
    }

    &__adding {
        margin-right: 50px;
    }

    &__name {
        color: $main-color;
        text-transform: uppercase;
        font-size: 48px;
        font-weight: 200;
    }

    &__section {
        color: $black
    }

    &__description {
        font-size: 18px;
        color: $sub-text;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__price {
        font-weight: 200;
        text-transform: uppercase;
    }

    &__sale {
        color: $main-color;
        font-size: 28px;
        font-weight: 600;
        margin: 0;
    }

    &__original-cost {
        margin: 0;
        margin-left: 10px;
        text-decoration: line-through;
        color: $black;
        font-size: 20px;
        font-weight: 400;
    }

    &__amount {
        margin: 0;
        font-weight: 600;
        font-size: 20px;
        border: none;
        width: 70px;
        height: 30px;
        border-radius: 15px;
        background-color: $light-grey;
    }
}

.items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 40px;
    cursor: pointer;
    transition: opacity 0.4s;
    opacity: 100%;

    &:hover {
        transition: opacity 0.4s;
        opacity: 70%;
    }

    &__img {
        width: 125px;
        height: 125px;
        background-size: cover;
    }

    &__name {
        margin: 0;
        text-transform: uppercase;
    }

    &__description {
        font-size: 14px;
        margin: 0;
        color: $sub-text;
        text-align: left;
    }
}

.recomended {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 100%;
    background-color: $white;
    box-shadow: 0 0 15px $border-color;
    display: grid;
    grid-template-columns: 50px 1fr;
    position: relative;

    &__header {
        transform: rotate(-90deg) translateY(50%) translateX(6.125%);
        height: fit-content;
        text-transform: uppercase;
        font-size: 24px;
        margin: 0;
        position: absolute;
        left: -70px;
        top: 50%;
    }

    &__wrapper {
        grid-column: 2 / 3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 20px;
    }
}

.properties {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 72%;

    &__wrapper {
        display: flex;
    }

    &__plus {
        background-image: url(/img/icons/plus.png);
        background-size: cover;
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }

    &__minus {
        background-image: url(/img/icons/minus.png);
        background-size: cover;
        width: 30px;
        height: 30px;
    }

    &__pin {
        background-image: url(/img/icons/pin.png);
        background-size: cover;
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }

    &__search {
        background-image: url(/img/icons/left_menu/search.png);
        background-size: cover;
        width: 30px;
        height: 30px;
    }
}

.title {
    font-weight: 200;
    text-transform: uppercase;
    font-size: 36px;
}

.item {
    grid-column: 1 / 2;
    grid-row: 1 / span 5;
    background-color: $white;
    box-shadow: 0 0 15px $border-color;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.counter {
    position: absolute;
    top: 70px;
    right: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &__likes {
        margin: 0;
        font-size: 20px;
        margin-right: 10px;
        font-weight: 200;
    }

    &__mark {
        width: 30px;
        height: 30px;
        background-image: url(/img/icons/heart-empty.png) ;
        background-size: cover;
    }
}

.card {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
}

.category {
    display: flex;
    align-items: center;

    &__img {
        height: 40px;
        width: 40px;
        background-image: url("/img/icons/right_menu/livRoom.png");
        background-size: cover;
    }

    &__name {
        font-weight: 400;
        color: $sub-text;
        margin-right: 10px;
        font-size: 18px;
        text-transform: uppercase;
    }
}
</style>