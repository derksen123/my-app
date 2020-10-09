<template>
<v-card class="overflow-hidden">
  <v-app>
    <v-app-bar
    absolute
      color="black"
      dark
      app
    >
    <v-row align="center" justify="space-around">
      <v-btn   @click="App" >
     Золошлаковые отходы
      </v-btn>
    <v-btn  icon @click="Classifler" >
      Классификатор
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    <v-btn  @click="Classifler">
        Классификатор
      </v-btn>
    <v-btn  @click="Organization">
        ГРЭ и ТЭЦ
      </v-btn>
    </v-row>
 </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
  </v-card>
</template>
<script>
export default {
 methods: {
  Classifler() {
    this.$router.push('/Classifler')
  },
  App() {
    this.$router.push('App')
  }
 }
}
</script>
