<template>
  <v-app
    id="inspire"
    dark
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list two-line>
        <v-subheader class="mt-3 grey--text text--darken-1">YT Trend Options</v-subheader>
        
        <v-list-tile :to="'/'">
          <v-list-tile-action >
            <v-icon color="grey darken-1">home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="'/about'">
          <v-list-tile-action >
            <v-icon color="grey darken-1">info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">YT Trends</span>
      </v-toolbar-title>
      
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer class="pa-3">
    <v-spacer></v-spacer>

    <a href="https://ahsan-web.ml" target="_blank" style="text-decoration: none;color: #575757">Created by Ahsan &copy; {{ new Date().getFullYear() }}</a>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false
  })
}
</script>
