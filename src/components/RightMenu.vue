<template>
	<div>
		<button
			class="right-menu__button"
			:style="isMenuShown ? 'background-image: url(/img/icons/cross.png)' : 'background-image: url(/img/icons/lines.png)'"
			@click="toggleMenu"
		/>
		<div
			v-if="isMenuShown"
			class="right-menu"
		>
			<div
				class="right-menu__wrapper"
			>
				<div
					v-for="route in routs"
					:key="route.name"
					class="right-menu__item"
					@click="changeRoute(route)"
				>
					{{ route.name }}
					<div
						class="right-menu__icon"
						:style="route.icon"
					/>
				</div>
			</div>
			<a class="link right-menu__link">
				show all categories
			</a>
		</div>
	</div>
</template>

<script>
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component({})

export default class RightMenu extends Vue {
    isMenuShown = false;
    routs = [
    	{
    		icon : 'background-image: url(/img/icons/right_menu/livRoom.png)',
    		path : '/products',
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
    	this.$router.push(route.path).catch(error => {});
    	this.$emit('changeRoute',route.name);
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
        z-index: 1;
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
        transition: opacity 0.2s;
        opacity: 1;
        cursor: pointer;
        
        &:hover {
            transition: opacity 0.2s;
            opacity: 0.7;
        }
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