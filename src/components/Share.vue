<template>
    <v-btn icon
    color="#F44336" 
    @click="share">
        <v-icon>share</v-icon>
    </v-btn>
</template>

<script>
export default {
    props: ["vid"],
    data: function() {
    return {
      value: "https://www.youtube.com/watch?v=" + this.vid.id,
      title: this.vid.snippet.title,
    };
  },
    methods:{
        async share() {
            if(navigator.share){
                try {
                    await navigator.share({ title: this.title, url: this.value });
                } 
                catch (err) {
                    // eslint-disable-next-line
                    console.error("Share failed:", err.message);
                }
            }else{
                alert('your browser is not supported')
            }
        }
    }

}
</script>

<style scoped>

</style>

