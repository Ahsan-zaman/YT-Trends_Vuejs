<template>
  <v-container>
    <div class="flex">
      <div class="vid elevation-5"
        v-for="video in videos"
        :key="video">
        <h1>{{video.title}}</h1>
      </div>
    </div>
  </v-container>
</template>

<script>
  // import Axios from "axios"
  export default {
    data() {
      return{
        videos: [
          {title: "test block 1"},
          {title: "test block 2"},
          {title: "test block 3"},
          {title: "test block 3"},
          {title: "test block 3"},
          {title: "test block 3"},
          {title: "test block 3"},
          {title: "test block 3"},
          {title: "test block 3"},
          {title: "test block 3"},
          {title: "test block 4"},
          {title: "test block 5"}
        ]
      }
    }
    // mounted(){
    //   Axios
    //   .get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=US&key={YOUR_API_KEY}')
    //   .then(res=>(this.videos= res.data))
    // }
  }
</script>

<style scoped>

.flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
}

.vid {
  min-height: 180px;
  min-width: 320px;
  margin: 25px;
}
</style>
