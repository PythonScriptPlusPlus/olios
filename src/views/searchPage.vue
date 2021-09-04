<template>
	<div class="container">
		<div class="search">
			<ol-input />
			<div class="search__items">
				<div class="search__item">
					<div
						class="search__item--picture"
					/>
					<p class="search__item--text">
						read seat
					</p>
				</div>
			</div>
			<p class="search__text">
				1 item searched
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Search',
};
</script>

<style lang="scss" scoped>
.search {
	height: 100%;
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

		&--picture {
			background-image: url(../../public/img/red_seat.png);
			background-size: cover;
			width: 100px;
			height: 100px;
		}

		&--text {
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
