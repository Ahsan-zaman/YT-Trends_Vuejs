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
      value: "https://www.youtube.com/watch?v=" + this.vid.id,
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
  /* border-bottom: #F44336 1px solid; */
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
</style>
