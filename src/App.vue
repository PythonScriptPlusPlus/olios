<template>
	<div>
		<left-menu class="left" />
		<right-menu class="right" />
		<router-view
			:title="title"
			@changeRoute="onChange($event)"
		/>
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
	z-index: 5;
}
</style>

<script>
export default {
	data() {
		return {
			title: 'none'
		};
	},
	methods: {
		onChange(name) {
			this.title = name;
			console.log('somthin');
		}
	}
};
</script>