<template>
  <div>
    <v-app-bar
      color="indigo darken-1"
      dense
      dark
    >

      <v-btn class="mobile-btn"
        icon
        @click.stop="drawer = !drawer"
      >
         <v-icon>mdi-menu</v-icon>
      </v-btn>

      <router-link to="/home">
        <v-toolbar-title>DevXpart</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <div class="nav-menu-item">
        <router-link to="/home">
          <v-btn text>
            HOME
          </v-btn>
        </router-link>

        <router-link to="/about">
          <v-btn text>
            About
          </v-btn>
        </router-link>

        <router-link to="/contact">
          <v-btn text>
            Contact
          </v-btn>
        </router-link>
      </div>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >

      <v-list dense class="mbl-nav">

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', link: '/home' },
          { title: 'About', link: '/about' },
          { title: 'Contact', link: '/contact' },
        ],
      }
    },
}
</script>

<style>
.v-toolbar__content {
  height: 60px !important;
}
.v-toolbar {
  height: 60px !important;
}
a {
  text-decoration: none;
  color: #fff !important;
}
.nav-menu-item {
  display: none !important;
}
.mbl-nav a {
  color: #000 !important;
}

@media (min-width: 700px) {
  .mobile-btn {
    display: none !important;
  }
  .nav-menu-item {
    display: block !important;
  }
}
</style>