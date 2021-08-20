<template>
    <div class='search'>
        <input class='search__input' placeholder='red seat' />
        <div class='search__label'>
            <!-- eslint-disable max-len -->
            Type product that you are looking for
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
