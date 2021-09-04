<template>
	<div class="menu">
		<div class="menu__wrapper">
			<div class="menu__logo" />
			<div class="menu__items">
				buttons
			</div>
		</div>
		<div class="menu__item menu__item--logout" />
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class LeftMenu extends Vue {}
</script>

<style lang="scss" scoped>
.menu {
    height: 100vh;
    width: 80px;
    background-color: $white;
    box-shadow: 0px 0px 15px $border-color;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0 65px;

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__logo {
        margin-bottom: 100px;
        background-image: url("../../public/img/icons/logo.png");
        background-size: cover;
        width: 35px;
        height: 35px;
    }

    &__item {
        cursor: pointer;
        background-size: cover;
        width: 25px;
        height: 30px;

        &:hover {
            transition: width 1s height 1s;
            width: 30px;
            height: 35px;
        }

        &--logout {
            background-image: url("../../public/img/icons/logout.png");

        }
    }
}

</style>