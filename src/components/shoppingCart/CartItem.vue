<template>
	<div class="wrapper">
		<div class="item">
			<div class="item__icon" />
			<p class="item__name">
				red seat
			</p>
		</div>
		<p class="wrapper__counter">
			1
		</p>
		<p class="wrapper__cost">
			$45
		</p>
		<div class="wrapper__cross" />
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class CartItem extends Vue {}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    border-bottom: 1px solid $border-color;

    &__counter {
        margin: 0px;
        font-weight: 600;
    }

    &__cost {
        margin: 0px;
        font-size: 14px;
        font-weight: 600;
    }

    &__cross {
        width: 20px;
        height: 20px;
        background-image: url(../../../public/img/icons/circle-cross.png);
        background-size: cover;
    }
}

.item {
    display: flex;
    align-items: center;

    &__icon {
        width: 50px;
        height: 50px;
        background-color: $sub-text;
        background-image: url(../../../public/img/red_seat.png);
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 10px;
    }

    &__name {
        text-transform: uppercase;
        font-weight: 200;
        margin: 0px;
        text-align: center;
        width: 120px;
    }
}

</style>