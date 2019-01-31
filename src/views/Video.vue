<template>
    <div class="flex">
        <h1>{{$route.params.title}}</h1>
        <div class="iframeVideo">
            <iframe
                :src="url" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <v-btn class="back" outline color="error" @click="back">
            <v-icon>arrow_back</v-icon>
            Back</v-btn>
    </div>
</template>

<script>

  export default {
    data(){
        return{
            url: `https://www.youtube.com/embed/${this.$route.params.id}`
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    mounted(){
        
    }
  }
</script>
<style scoped>
.flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
}
.iframeVideo{
    margin: 5vh 0;
}
.iframeVideo iframe {
    max-width:720px;
    max-height: 360px;
	width: 80vw;
    height: calc(80vw *.5);
}
.back{
   width: 50vw;
}
@media screen and (max-width: 540px){
    .iframeVideo iframe {
	width: 100vw;
    height: calc(100vw *.5);
}
}
</style>

