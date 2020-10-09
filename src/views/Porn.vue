<template>
    <div>
        <h1>Porn</h1>
        {{ test }}
        <Porn />
    </div>
</template>

<script>
import Porn from '@/components/test.vue'
export default {
    components: {
        Porn
    },
    data: () => ({
        test: 'her'
    })
}
</script>