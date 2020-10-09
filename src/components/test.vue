<template>
    <div>
        test.vue компонент
        <v-btn @click="getData">
            Получить данные с сервера
        </v-btn>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        getData() {
            console.log('Отправляем запрос')
            axios.get('http://localhost:3000/getData').then(result => {
                console.log(result.data)
            })
        }
    }
}
</script>
