<template>
	<div class="menu">
		left menu
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class LeftMenu extends Vue {}
</script>

<style lang="scss" scoped>
.menu {
    height: 100vh;
    width: 80px;
    background-color: $white;
    box-shadow: 0px 0px 15px $border-color;
}
</style>