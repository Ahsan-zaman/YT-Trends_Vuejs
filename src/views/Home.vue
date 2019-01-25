<template>
  <v-container>
    <search-vid/>
    <video-list/>
  </v-container>
</template>

<script>
  import VideoList from '../components/VideoList'
  import SearchVid from '../components/SearchVid'

  export default {
    components: {
      SearchVid,
      VideoList
    },
    methods:{
    }
  }
</script>
