<template>
	<div class="wrapper">
		left menu
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class LeftMenu extends Vue {}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100vw;
    width: 100px;
    background-color: $white;
    box-shadow: 0px 0px 15px $border-color;
}
</style>