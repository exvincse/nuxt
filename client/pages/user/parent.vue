<template>
    <div class="error">
        <span>/user/_id</span>
        <nuxt-child :foobar="123" />
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .error {
        text-align: center;
    }

    .error span {
        font-size: 48px;
    }
</style>