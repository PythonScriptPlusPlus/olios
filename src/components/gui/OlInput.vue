<template>
	<div class="field">
		<input
			v-model="innerValue"
			class="field__input"
			:placeholder="placeholder"
			@input="onInput($event)"
		/>
		<span
			v-if="clearable"
			@click="onClear"
		>
			X
		</span>
		<div
			v-if="label"
			class="field__label"
		>
			{{ label }}
		</div>
	</div>
</template>

<script>
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class OlInput extends Vue {
    @Prop({type: String, default: ''}) label
    @Prop({type: String, default: 'type value'}) placeholder
    @Prop({default: ''}) value
    @Prop({type: Boolean, default: false}) clearable

    get innerValue() {
    	return this.value;
    }

    set innerValue(value) {
    	this.$emit('input',value);
    }

    @Emit('input')
    onInput(event = {}) {
    	let value = '';

    	if (event?.target.value) {
    		value = event.target.value;
    	}

    	if (!value) {
    		this.onClear();
    	}

    	return value;
    }

    @Emit('clear')
    onClear() {
    	this.innerValue = '';
    }
}
</script>

<style lang="scss" scoped>

.field__input {
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
    width: 100%;

    &::placeholder {
        color: $black;
    }
}

.field__label {
    margin: 5px 0px 0px 0px;
    color: $sub-text;
}

.field {
    display: inline-block;
    text-align: left;
    height: auto;
}
</style>
