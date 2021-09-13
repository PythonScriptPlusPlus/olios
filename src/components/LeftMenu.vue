<template>
	<div class="menu">
		<div class="menu__wrapper">
			<div class="menu__logo" />
			<div class="menu__items">
				<div
					v-for="route in routs"
					:key="route.name"
					class="menu__item"
					@click="changeRoute(route.path)"
				>
					{{ route.name }}
				</div>
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
    		icon: '',
    		path: '/',
    		name: 'home'
    	},
    	{
    		icon: '',
    		path: '/shopcart',
    		name: 'cart'
    	},
    	{
    		icon: '',
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