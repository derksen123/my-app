<template>
  <div id="app" style="width: 100%; height: 100%">
    <gmap-map :center="center" :zoom="15" style="width: 100%; height: 100%">
      <gmap-info-window
        :options="infoOptions"
        :position="infoPosition"
        :opened="opened"
        @closeclick="opened = false"
      >
        {{ infoData }}
      </gmap-info-window>

      <gmap-marker
        v-for="(position, index) in positions"
        :key="index"
        :position="position"
        :clickable="true"
        @click="openInfo(position)"
      />
    </gmap-map>
  </div>
</template>

<script>
export default {
  methods: {
    openInfo(position) {
      this.infoPosition = position
      this.opened = true
      this.infoData = position.text
    }
  },
  data: () => ({
    opened: false,

    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    },

    infoPosition: null,

    infoData: null,

    center: {
      lat: 55.366564, 
      lng: 86.063057 
    },

    positions: [
      {
        lat: 55.366771, 
        lng: 86.071495,
        text: 'Кемеровская ГРЭС'
      },
      {
        lat: 55.365562, 
        lng: 86.063373,
        text: 'Кузбассэнерго, Кемеровская ГРЭС'
      },
      {
        lat: 53.781884, 
        lng: 87.591335,
        text: 'Кузбассэнерго, Томь-Усинская ГРЭС'
      },
      {
        lat: 54.445459,  
        lng: 86.425871,
        text: 'Кузбассэнерго, Беловская ГРЭС'
      },
      {
        lat: 55.351383, 
        lng: 85.997615,
        text: 'ОАО "Ново-Кемеровская ТЭЦ"'
      },
      {
        lat: 55.400407, 
        lng: 85.986933,
        text: 'Кемеровская ТЭЦ'
      },
      {
        lat: 53.511801, 
        lng: 87.265068,
        text: 'Южно-кузбасская ГРЭС'
      },
      {
        lat: 53.770981, 
        lng: 87.236593,
        text: 'Кузбассэнерго, Кузнецкая ТЭЦ'
      },
      {
        lat: 53.879941, 
        lng: 87.239594,
        text: 'Западно-Сибирская Тэц'
      }
    ],

    options: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    }
  })
}
</script>
