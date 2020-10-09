<template>
    <div>
        <h1>Classifler</h1>
        {{ classifl }}
        <Classifler />
    </div>
</template>

<script>
import Classifler from '@/components/Classifl.vue'
export default {
    components :{
      Classifler
    },
     data: () => ({
        Classifl: 'her' ///что такое her?
    })
}
</script>