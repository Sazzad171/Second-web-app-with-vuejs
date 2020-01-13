<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img :src="colors[i]">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3 white--text">{{ slide }} Slide</div>
        </v-row>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        colors: [
          require('../assets/01.jpg'),
          require('../assets/02.jpg'),
          require('../assets/03.jpg'),
          require('../assets/04.jpg'),
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
        ],
      }
    },
  }
</script>