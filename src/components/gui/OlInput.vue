<template>
	<div class="search">
		<input
			class="search__input"
			placeholder="red seat"
		/>
		<div class="search__label">
			<!-- eslint-disable max-len -->
			Type product that you are looking for
			<!-- eslint-enable max-len -->
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class OlInput extends Vue {}
</script>

<style lang="scss" scoped>

.search__input {
    background-color: transparent;
    font-weight: 200;
    display: inline-block;
    padding: 0px;
    font-size: 48px;
    color: $black;
    text-transform: uppercase;
    border: none;
    border-bottom: 1px solid $border-color;
    line-height: 72px;
    width: calc(100vw - 100px);

    &::placeholder {
        color: $black;
    }
}

.search__label {
    margin: 5px 0px 0px 0px;
    color: $sub-text;
}

.search {
    display: inline-block;
    text-align: left;
    height: auto;
}
</style>
