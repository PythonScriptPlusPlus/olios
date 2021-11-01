<template>
	<div class="delivery">
		<p class="delivery__title">
			delivery
		</p>
		<div class="delivery__adress">
			<ol-input
				v-model="order.city"
				:label="'city'"
			/>
			<ol-input
				v-model="order.adress"
				:label="'adress'"
			/>

			<div class="delivery__wrapper">
				<ol-input
					v-model="order.floor"
					class="delivery__input"
					:label="'floor'"
				/>
				<ol-input
					v-model="order.flat"
					:label="'flat/office'"
				/>
			</div>
		</div>
		<p
			v-if="isValidated"
			class="delivery__validation"
		>
			{{ validationString }}
		</p>
		<button
			class="btn delivery__button"
			@click="validateOrder()"
		>
			order
		</button>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Delivery extends Vue {
    order = {
    	city: '',
    	adress: '',
    	floor: '',
    	flat: '',
    }
    fields = []
    isValidated = false; 
    
    get validationString() {
    	if (this.fields.length) {
    		return `fill fields: ${this.fields.join(', ')}`;
    	} else {
    		return 'your order is claimed';
    	}
    }
    validateOrder() {
    	this.fields = Object.keys(this.order).filter(field => !this.order[field]);
    	this.isValidated = true;
    }
}

</script>

<style lang="scss" scoped>
.delivery {
    height: 100%;
    text-align: left;
    position: relative;

    &__input {
        margin-right: 30px;
    }

    &__title {
        margin: 0px;
        margin-bottom: 25px;
        text-transform: uppercase;
    }

    &__validation {
        font-size: 12px;
        text-transform: uppercase;

        &--right {
            color:green;
        }

        &--wrong {
            color: red;
        }
    }

    &__button {
        position: absolute;
        bottom: 0px;
        left: 5px;
    }

    &__wrapper {
        display: flex;
    }
}
</style>
