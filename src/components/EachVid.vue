<template>
  <v-card @click="video">
    <v-img :src="vid.snippet.thumbnails.standard.url" class="vid">
      <div class="title">
        <p v-text="vid.snippet.title.slice(0,30)+`...`"></p>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: ["vid"],
  data: function() {
    return {
      title: this.vid.snippet.title,
      id: this.vid.id
    };
  },
  methods: {
    video(){
      this.$router.push(`/video/${this.id}/${this.title}`)
    }
  }
};
</script>

<style scoped>
.vid {
  height: 180px;
  width: 318.6px;
  cursor: pointer;
}
.title {
  display: flex;
  position: relative;
  color: #fff;
  line-height: unset;
  padding: 2px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}
.title p {
  margin: 0 0 0 10px;
  line-height: 40px;
  font-size: 16px;
}
.title button {
  position: absolute;
  top: 0;
  right: 0;
}
@media only screen and (max-width: 768px){
  .vid{
    width: 354px;
    height: 200px;
  }
}
@media only screen and (max-width: 400px){
  .vid{
    width:318.6px ;
    height:180px ;
  }
}
</style>
