<template>
	<div>
		<left-menu class="left-menu" />
		<right-menu class="right-menu" />
		<router-view />
	</div>
</template>

<style lang="scss">

.left-menu {
	position: absolute;
	left: 0;
	height: 100vw;
}

.right-menu {
	position: absolute;
	right: 0;
	height: 100vw;
}
</style>
