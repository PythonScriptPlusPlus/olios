<template>
	<div class="promocode">
		<p class="promocode__title">
			have promocode?
		</p>
		<ol-input
			v-model="code"
			class="promocode__input"
			:placeholder="'type your code'"
			@blur="validateCode()"
		/>
		<p
			v-if="code"
			class="promocode__validation"
			:class="isValid ? 'promocode__validation--right' : 'promocode__validation--wrong'"
		>
			{{ isValid ? "promocode is valid" : "promocode is not valid" }}
		</p>
		<a class="promocode__promo-link">
			don't have a promocode?
		</a>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Promo extends Vue {
    code = '';
    isValid = false;

    validateCode() {
    	this.isValid = this.code.length >= 5;
    }
}
</script>

<style lang="scss" scoped>
.promocode {
    height: 100%;
    text-align: left;
    position: relative;
    text-transform: uppercase;
    position: relative;

    &__title {
       margin: 0px;
    }

    &__input {
        margin-top: 25px;
    }

    &__validation {
        font-size: 12px;

        &--right {
            color: green;
        }

        &--wrong {
            color: red;
        }
    }

    &__promo-link {
        font-size: 14px;
        text-decoration: none;
        position: absolute;
        bottom: 0px;
        left: 0px;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
