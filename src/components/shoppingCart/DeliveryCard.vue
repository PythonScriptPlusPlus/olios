<template>
	<div class="delivery">
		<p class="delivery__title">
			delivery
		</p>
		<button class="btn delivery__button">
			order
		</button>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Delivery extends Vue {}
</script>

<style lang="scss" scoped>
.delivery {
    height: 100%;
    text-align: left;
    position: relative;

    &__title {
        margin: 0px;
        padding: 10px;
        text-transform: uppercase;
    }

    &__button {
        position: absolute;
        bottom: 10px;
        left: 15px;
    }
}
</style>
