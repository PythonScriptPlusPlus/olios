<template>
	<div class="container search">
		<ol-input />
		<div class="search__items">
			<div class="search__item">
				<div
					class="search__item-picture"
				/>
				<p class="search__item-text">
					read seat
				</p>
			</div>
			<div class="search__item">
				<div
					class="search__item-picture"
				/>
				<p class="search__item-text">
					grey seat
				</p>
			</div>
		</div>
		<p class="search__text">
			{{ amount }} item searched
		</p>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class SearchPage extends Vue {
	amount = 3;
}
</script>

<style lang="scss" scoped>
.search {
	height: 500px;
	display: flex;
	flex-direction: column;
	text-align: left;
    justify-content: space-between;

	&__items {
		margin-top: 30px;
		display: flex;
		flex-wrap: wrap;
	}

	&__item {
		display: flex;
		align-items: center;
		background: $white;
		margin: 0 25px 25px 0;

		&:nth-child(2) .search__item-picture{
			background-image: url(../../public/img/grey_seat.png);
			background-size: cover;
			width: 100px;
			height: 100px;

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
