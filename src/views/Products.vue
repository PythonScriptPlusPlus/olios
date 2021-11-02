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
		<div class="items">
			<div 
				v-for="item in items"
				:key="item.name"
				:class="item.big ? 'wrapper wrapper--big' : 'wrapper'"
			>
				<div
					:class="item.big ? 'items__img items__img--big' : 'items__img'"
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
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class SearchPage extends Vue {
    @Prop({type: String, default: 'unknown'}) title

    items = [
    	{
    		icon : 'background-image: url("/img/red_seat.png")',
    		name : 'read seat',
    		description : 'haec ego amo lectiones',
    		price : '$45',
    		big : false
    	},
    	{
    		icon : 'background-image: url("/img/white_seat.png");',
    		name : 'white seat',
    		description : 'haec ego amo lectiones',
    		price: '$350',
    		big : true
    	},
    	{
    		icon : 'background-image: url("/img/blue_seat.png");',
    		name : 'blue seat',
    		description : 'haec ego amo lectiones',
    		price: '$35',
    		big : false
    	},
    	{
    		icon : 'background-image: url("/img/bed.png");',
    		name : 'modern bed',
    		description : 'haec ego amo lectiones',
    		price: '$120',
    		big : true
    	},
    	{
    		icon : 'background-image: url("/img/grey_seat.png");',
    		name : 'grey seat',
    		description : 'haec ego amo lectiones',
    		price: '$50',
    		big : false
    	},
    ]
}
</script>

<style lang="scss" scoped>
.product {
    text-align: left;
    position: relative;
    
    &__title {
        text-transform: uppercase;
        font-weight: 400;
    }

    &__link {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 600;
        text-transform: uppercase;
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
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &__img {
        width: 150px;
        height: 150px;
        background-size: cover;

        &--big {
            width: 238px;
            height: 238px;
        }
    }

    &__name {
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0;
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

.wrapper {
    margin: 10px;
    padding: 20px;
    background-color: $white;
    width:fit-content;

    &--big {
        display: flex;
        align-items: center;
    }
}
</style>
