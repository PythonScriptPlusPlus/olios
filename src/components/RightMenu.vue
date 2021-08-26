<template>
	<div class="right-menu">
		<button class="right-menu__button">
			cross
		</button>
		<div class="right-menu__item">
			living room
			<div class="right-menu__item__icon">
				icon
			</div>
		</div>
		<p class="right-menu__link">
			all categories
		</p>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class RightMenu extends Vue {}
</script>

<style lang="scss" scoped>
.right-menu {
    height: 100vw;
    width: 250px;
    background-color: $white;
    box-shadow: 0px 0px 15px $border-color;

    &__button {
        position: absolute;
        padding: 0;
        width: 80px;
        height: 60px;
        border: none;
        top: 10px;
        right: 10px;
    }

    &__item {
        position: absolute;
        font-size: 16px;
        color: $sub-text;
        top: 350px;
        left: 40px;
        text-transform: uppercase;

        &__icon {
            text-transform: lowercase;
            background-color: $border-color;
            position: absolute;
            top: -5px;
            right: -40px;
            width: 35px;
            height: 35px;
        }
    }

    &__link {
        color: $main-color;
        margin: 0px;
        text-decoration: underline;
        text-underline-offset: 5px;
        line-height: 1.5em;
        position: absolute;
        bottom: 0;

    }
}
</style>