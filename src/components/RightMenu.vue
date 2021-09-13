<template>
	<div class="right-menu">
		<button
			class="right-menu__button"
			@click="toggleMenu"
		/>
		<div
			v-if="isMenuShown"
			class="right-menu__wrapper"
		>
			<div
				v-for="route in routs"
				:key="route.name"
				class="right-menu__item"
				@click="changeRoute(route.path)"
			>
				{{ route.name }}
				<div
					class="right-menu__icon"
					:style="route.icon"
				/>
			</div>
		</div>
		<a class="right-menu__link">
			show all categories
		</a>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class RightMenu extends Vue {
    isMenuShown = true;
    routs = [
    	{
    		icon : 'background-image: url(/img/icons/right_menu/livRoom.png)',
    		path : '',
    		name : 'living room'
    	},
    	{
    		icon : 'background-image: url(/img/icons/right_menu/office.png)',
    		path : '',
    		name : 'office'
    	},
    	{
    		icon : 'background-image: url(/img/icons/right_menu/forKids.png)',
    		path : '',
    		name : 'for kids'
    	},
    	{
    		icon : 'background-image: url(/img/icons/right_menu/kitchen.png)',
    		path : '',
    		name : 'kitchen'
    	},
    	{
    		icon : 'background-image: url(/img/icons/right_menu/accesories.png)',
    		path : '',
    		name : 'accesories'
    	},
    ]

    toggleMenu() {
    	this.isMenuShown = !this.isMenuShown;
    }

    changeRoute(route) {
    	this.$router.push(route).catch(error => {});

    }
}
</script>

<style lang="scss" scoped>
.right-menu {
    height: 100vh;
    width: 300px;
    background-color: $white;
    box-shadow: 0px 0px 15px $border-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__button {
        cursor: pointer;
        background-color: $white;
        background-image: url("../../public/img/icons/lines.png");
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: 0px 0px 15px $border-color;
        position: absolute;
        padding: 0;
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 50%;
        top: 50px;
        right: 30px;
    }

    &__wrapper {
        color: $sub-text;
    }

    &__item {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-transform: uppercase;
        margin-bottom: 25px;
    }

    &__icon {
        margin-left: 25px;
        height: 60px;
        width: 60px;
        background-size: cover;
    }

    &__link {
        width: 200px;
        text-transform: uppercase;
        color: $main-color;
        text-decoration: underline;
        text-underline-offset: 5px;
        font-size: 16px;
        position: absolute;
        transition: bottom .5s;
        bottom: 65px;
        left: 50%;
        transform: translateX(-50%);

        &:hover {
            transition: bottom .5s;
            bottom: 70px;
        }
    }
}
</style>