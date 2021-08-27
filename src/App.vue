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
    top: 0;
}

.right-menu {
	position: absolute;
	top: 0;
    right: 0;
}
</style>
