<template>
	<div class="menu">
		<div class="menu__wrapper">
			<div class="menu__logo" />
			<div class="menu__items">
				<div
					v-for="route in routs"
					:key="route.name"
					class="menu__item"
					:style="route.icon"
					@click="changeRoute(route.path)"
				/>
			</div>
		</div>
		<div class="menu__item menu__item--logout" />
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class LeftMenu extends Vue {
    routs = [
    	{
    		icon: 'background-image: url(/img/icons/left_menu/home.png)',
    		path: '/',
    		name: 'home'
    	},
    	{
    		icon: 'background-image: url(/img/icons/left_menu/basket.png)',
    		path: '/shopcart',
    		name: 'cart'
    	},
    	{
    		icon: 'background-image: url(/img/icons/left_menu/search.png)',
    		path: '/search',
    		name: 'search'
    	},
    ]

    changeRoute(route) {
    	this.$router.push(route).catch(error => {});

    }
}
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
        width: 30px;
        height: 30px;
    }

    &__item {
        cursor: pointer;
        background-size: cover;
        background-position: center;
        width: 32px;
        height: 32px;
        margin-bottom: 50px;
            transition: opacity 0.5s;
            opacity: 1;

        &:hover {
            transition: opacity 0.5s;
            opacity: .5;
            
        }

        &--logout {
            background-image: url("../../public/img/icons/logout.png");
            width: 24px;
            height: 29px;

        }
    }
}

</style>