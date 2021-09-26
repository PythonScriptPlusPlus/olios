<template>
	<div class="promocode">
		<p class="promocode__title">
			have promocode?
		</p>
		<a class="promocode__promo-link">
			don't have a promocode?
		</a>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Promo extends Vue {}
</script>

<style lang="scss" scoped>
.promocode {
    height: 100%;
    text-align: left;
    position: relative;
    text-transform: uppercase;
    position: relative;

    &__title {
       margin: 0px;
    }

    &__promo-link {
        font-size: 14px;
        text-decoration: none;
        position: absolute;
        bottom: 0px;
        left: 0px;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
