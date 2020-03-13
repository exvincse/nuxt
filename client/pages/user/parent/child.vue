<template>
    <div>
        <nuxt-child :keep-alive-props="{ exclude: ['modal'] }"></nuxt-child>
        <span>child</span>
    </div>
</template>

<script>
    export default {}
</script>