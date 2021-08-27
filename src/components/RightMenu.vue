<template>
	<div class="right-menu">
		<button class="right-menu__button">
			cross
		</button>
		<div class="right-menu__wrapper">
			<div class="right-menu__item">
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
        color: $sub-text;
        margin-top: 350px
    }

    &__item {
        margin-bottom: 25px;
    }

    &__icon {
        background-color: $border-color;
    }

    &__link {
        color: $main-color;
        text-decoration: underline;
        text-underline-offset: 5px;
        font-size: 18px;
        position: absolute;
        transition: bottom .5s;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);

        &:hover {
            transition: bottom .5s;
            bottom: 25px;
        }
    }
}
</style>