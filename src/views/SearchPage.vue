<template>
	<div class="container search">
		<ol-input
			v-model="term"
			class="search__input"
			:label="'Type whatever you want'"
			:placeholder="'read seat'"
			clearable
		/>
		<div class="search__items">
			<div
				v-for="item in items"
				:key="item.name"
				class="search__item"
				@click="changeRoute('/productCard')"
			>
				<div
					class="search__item-picture"
					:style="item.img"
				/>
				<p class="search__item-text">
					{{ item.name }}
				</p>
			</div>
		</div>
		<p class="search__text">
			1 item searched
		</p>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class SearchPage extends Vue {
	term = ''
	items = [
		{
			name: 'read seat',
			img: 'background-image: url(/img/red_seat.png);'
		},
		{
			name: 'grey seat',
			img: 'background-image: url(/img/grey_seat.png);'
		},
	]

	changeRoute(route) {
    	this.$router.push(route).catch(error => {});
	}
}
</script>

<style lang="scss" scoped>
.search {
	height: 500px;
	display: flex;
	flex-direction: column;
	text-align: left;
    justify-content: space-between;

	&__input {
		font-size: 48px;
	}

	&__items {
		margin-top: 30px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	&__item {
		display: flex;
		align-items: center;
		background: $white;
		margin: 0 25px 25px 0;
		transition: padding .5s;
		height: fit-content;
		cursor: pointer;
	
		&:hover {
			transition: padding .5s;
			padding: 1%;
		}

		&-picture {
			background-image: url(../../public/img/red_seat.png);
			background-size: cover;
			width: 100px;
			height: 100px;
		}

		&-text {
			font-size: 24px;
			text-transform: uppercase;
			margin-left: 25px;
			padding-right: 25px;
		}
	}

	&__text {
		font-weight: 800;
	}
}
</style>
