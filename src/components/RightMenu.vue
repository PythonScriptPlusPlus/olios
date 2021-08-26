<template>
	<div class="right-menu">
		<button class="right-menu__button">
			cross
		</button>
		<div class="right-menu__wrapper">
			<div>
				living room
				<span class="right-menu__icon">
					icon
				</span>
			</div>
		</div>
		<a class="right-menu__link">
			all categories
		</a>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class RightMenu extends Vue {}
</script>

<style lang="scss" scoped>
.right-menu {
    height: 100vh;
    width: 200px;
    background-color: $white;
    box-shadow: 0px 0px 15px $border-color;
    position: absolute;
    top: 0;
    right: 0;

    &__button {
        position: absolute;
        padding: 0;
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 50%;
        top: 10px;
        right: 10px;
    }

    &__wrapper {
        position: static;
        color: $sub-text;
        text-transform: uppercase;
        margin-top: 350px
    }
    &__icon {
        text-transform: lowercase;
        background-color: $border-color;
    }

    &__link {
        color: $main-color;
        text-decoration: underline;
        text-underline-offset: 5px;
        font-size: 18px;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>