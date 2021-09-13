<template>
	<div>
		<left-menu class="left" />
		<right-menu class="right" />
		<router-view />
	</div>
</template>

<style lang="scss">

.left {
	position: absolute;
	left: 0;
    top: 0;
}

.right {
	position: absolute;
	top: 0;
    right: 0;
}
</style>
