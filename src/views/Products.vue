<template>
	<div class="container product">
		<h1 class="product__title">
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
		<div class="items__wrapper">
			<div class="items">
				<div 
					v-for="item in items"
					:key="item.name"
					class="items__item"
					@click="changeRoute('/productCard')"
				>
					<div
						class="items__img"
						:style="item.icon"
					/>
					<div>
						<p class="items__name">
							{{ item.name }}
						</p>
						<p class="items__description">
							{{ item.description }}
						</p>
						<p class="items__cost">
							{{ item.price }}
						</p>
					</div>
				</div>
			</div>
			<a class="link product__link">show more products</a>
		</div>
	</div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class SearchPage extends Vue {
    @Prop({type: String, default: 'living room'}) title

    items = [
    	{
    		icon : 'background-image: url("/img/red_seat.png")',
    		name : 'read seat',
    		description : 'haec ego amo lectiones',
    		price : '$45'
    	},
    	{
    		icon : 'background-image: url("/img/white_seat.png");',
    		name : 'white seat',
    		description : 'haec ego amo lectiones',
    		price: '$350'
    	},
    	{
    		icon : 'background-image: url("/img/blue_seat.png");',
    		name : 'blue seat',
    		description : 'haec ego amo lectiones',
    		price: '$35'
    	},
    	{
    		icon : 'background-image: url("/img/bed.png");',
    		name : 'modern bed',
    		description : 'haec ego amo lectiones',
    		price: '$120'
    	},
    	{
    		icon : 'background-image: url("/img/grey_seat.png");',
    		name : 'grey seat',
    		description : 'haec ego amo lectiones',
    		price: '$50'
    	}
    ]

    changeRoute(route) {
    	this.$router.push(route).catch(error => {});
    }
}
</script>

<style lang="scss" scoped>
.product {
	height: 100vh;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
    text-align: left;
    position: relative;
    
    &__title {
        text-transform: uppercase;
        font-weight: 400;
		align-self: flex-start;
    }

    &__link {
        font-weight: 600;
        text-transform: uppercase;
		display: block;
		margin: 0 auto;
    }
}

.category {
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    align-items: center;

    &__img {
        height: 40px;
        width: 40px;
        //background-color: $sub-text;
        background-image: url("/img/icons/right_menu/livRoom.png");
        background-size: cover;
    }

    &__name {
        font-weight: 400;
        color: $sub-text;
        margin-right: 10px;
        font-size: 18px;
    }
}

.items {
    width: 100%;
    display: grid;
	grid-row-gap: 25px;
	grid-column-gap: 25px;
	grid-template-columns: repeat(4, 1fr);
	margin-bottom: 60px;
	grid-auto-flow: dense;

	&__wrapper {
		margin: 40px 0;	
	    width: 100%;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;

		&::-webkit-scrollbar {
			display: none;
    	}
	}

	&__item {
		padding: 20px;
		background: $white;
		transition: padding 0.5s;
		cursor: pointer;

		&:nth-of-type(5n-1) {
			grid-column: span 2;
			& .items__img {
				width: 300px;
				height: 300px;
			}
		}

		&:nth-of-type(5n-3) {
			grid-column: span 3;
			& .items__img {
				width: 400px;
				height: 300px;
				background-position: center;
			}

			& .items__name {
				font-size: 38px;
				margin-bottom: 15px;
			}

			& .items__description {
				font-size: 22px;
				margin-bottom: 40px;
			}

			& .items__cost {
				font-size: 22px;
			}
		}

		&:nth-of-type(5n-1), &:nth-of-type(5n-3) {
			display: flex;
			align-items: center;
			justify-content: space-around;
			& .items__img {
				margin: 0;	
			}
		}

		&:hover {
			transition: padding 0.5s;
			padding: 10px;
		}
	}

    &__img {
		margin: 0 auto 40px;
        width: 150px;
        height: 150px;
        background-size: cover;
    }

    &__name {
        font-size: 24px;
        font-weight: 200;
        text-transform: uppercase;
        margin: 0;
		margin-bottom: 5px;
    }

    &__description {
        margin-top: 0;
        color: $sub-text;
    }

    &__cost {
        margin: 0;
        color: $main-color;
        font-weight: 900;
    }
}

</style>
