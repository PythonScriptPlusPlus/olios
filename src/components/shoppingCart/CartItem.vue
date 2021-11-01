<template>
	<div class="item">
		<div class="wrapper">
			<div class="wrapper__icon" />
			<p class="wrapper__name">
				red seat
			</p>
		</div>
		<p class="item__counter">
			1
		</p>
		<p class="item__cost">
			$45
		</p>
		<div class="item__cross" />
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class CartItem extends Vue {}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.wrapper {
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
    }
}

</style>