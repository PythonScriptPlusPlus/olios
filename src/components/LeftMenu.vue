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
    width: 130px;
    background-color: $white;
    box-shadow: 0px 0px 15px $border-color;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 90px;

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__logo {
        margin-bottom: 100px;
        background-image: url("../../public/img/icons/logo.png");
        background-size: cover;
        width: 38px;
        height: 38px;
    }

    &__item {
        cursor: pointer;
        background-size: cover;
        width: 24px;
        height: 29px;

        &:hover {
            transition: width .2s, height .2s;
            width: 30px;
            height: 36px;
        }

        &--logout {
            background-image: url("../../public/img/icons/logout.png");

        }
    }
}

</style>