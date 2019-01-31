<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h2 class="display-2 font-weight-black mb-3">
          Welcome to YT-Trends
        </h2>
        <p class="subheading font-weight-regular">
          This is a Vuejs based front-end application to show the latest trending videos <br>
           from YouTube according to selected region and category.
           <br>
        </p>
          <v-card>

        <v-list subheader>
          <v-subheader>Technologies Used</v-subheader>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="aboutTech(item)"
          >
            <v-list-tile-avatar>
              <img :src= "item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon color="#F44336">link</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: ()=>{
    return{
    items: [
        { title: 'VueJS', avatar: 'https://vuejs.org/images/logo.png' , html:'https://vuejs.org/v2/guide/' },
        { title: 'Vuetify', avatar: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png' , html:'https://vuetifyjs.com/en/getting-started/why-vuetify' },
        { title: 'Google APIs', avatar: 'https://pbs.twimg.com/profile_images/722158570205130752/1t1sxtjy_400x400.jpg' , html:'https://developers.google.com/apis-explorer/' },
        { title: 'Axios', avatar: 'https://assets.axios.com/203e9f932cc97836ac2ff4c6c982676c.png' , html:'https://github.com/axios/axios' },
        { title: 'YouTube', avatar: 'https://developers.google.com/site-assets/logo-youtube.svg' , html:'https://developers.google.com/youtube/v3/getting-started' }
      ]
    }
  },
  methods:{
    aboutTech(item){
      window.open(item.html, '_blank', 'location=yes,scrollbars=yes,status=yes');
    }
  }
}
</script>
<style scoped>
</style>


