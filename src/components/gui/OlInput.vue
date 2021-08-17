<template>
    <div class='strctDiv'>
        <span>
            <input class='srch' placeholder='red seat' />
        </span>
        <span></span>
        <div>
            <!-- eslint-disable max-len -->
            <p class='lable'> Type product that you are looking for</p>
            <!-- eslint-enable max-len -->
        </div>
    </div>
</template>

<script>
import { Vue } from 'vue-property-decorator';

export default class OlInput extends Vue {}
</script>

<style lang="scss" scoped>

</style>
