<template>
	<div id="app">
		<div id="nav">
			<!--
			<router-link to="/">
				Main Page
			</router-link> |
			<router-link to="/items">
				Items
			</router-link> |
			<router-link to="/shopcart">
				Shopping Cart
			</router-link> |
			<router-link to="/search">
				Search
			</router-link>
		</div> -->
			<left-menu class="LeftMenu" />
			<right-menu class="RightMenu" />
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
#app {
	text-align: center;
}

#nav {
	position: relative;
}

.LeftMenu {
	position: absolute;
	left: 0;
	height: 100vw;
}

.RightMenu {
	position: absolute;
	right: 0;
	height: 100vw;
}
</style>
