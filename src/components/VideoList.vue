<template>
    <div class="flex">
        <div v-for="video in videos" :key="video.id" class="pos">
            <each-vid :vid="video" class="vid elevation-5"/>
            <v-btn icon
            v-if="showBTN"
            class="btn"
            color="#F44336" 
            @click="share">
                <v-icon>share</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapActions,mapState} from 'vuex'
    import EachVid from './EachVid.vue'
  export default {
    components: {
      EachVid
    },
    data() {
      return{
        videos:[],
        showBTN : false
      }
    },
    methods:{
        ...mapActions(['assignE','removeE']),
        async update(){
            await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
            params:{
            part: 'snippet, contentDetails, statistics',
            chart: 'mostPopular',
            videoCategoryId: this.videoCategoryId,
            maxResults: this.maxResults,
            regionCode: this.regionCode,
            key: 'AIzaSyB_wn0eW1-iohO_pwRPl9gNUFqZ8-jz9_Q'
            }
            })
            .then((res) =>{
                if(res.data.pageInfo.totalResults > 0){
                    this.videos = res.data.items
                    this.removeE()
                }
                else{
                    this.assignE('No Results were found in this Region & Category')
                    this.videos =[]
                }
            })
            .catch(err=>{
                this.assignE('could not find any video try another category')
                this.videos =[]
            })
        },
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
    },
    computed:{
        ...mapState(['error','maxResults','regionCode','videoCategoryId'])
    },
    watch:{
        'maxResults': function(){
            this.update()
        },
        'regionCode': function(){
            this.update()
        },
        'videoCategoryId': function(){
            this.update()
        }
    },
    async mounted(){
        await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
            params:{
            part: 'snippet, contentDetails, statistics',
            chart: 'mostPopular',
            videoCategoryId: this.videoCategoryId,
            maxResults: this.maxResults,
            regionCode: this.regionCode,
            key: 'AIzaSyB_wn0eW1-iohO_pwRPl9gNUFqZ8-jz9_Q'
        }
        })
        .then((res) =>{
            if(res.data.pageInfo.totalResults > 0){
                this.videos = res.data.items
                this.removeE()
            }
            else{
                this.assignE('No Results were found in this Region & Category')
                this.videos =[]
            }
        })
        .catch(err=>{
            this.assignE('could not find any video try another category/region')
            this.videos =[]
        })

        if(navigator.share){
            this.showBTN = true
        }
    }
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
  margin: 25px;
}
.pos{
    position: relative;
}
.btn{
    position: absolute;
    top: 70%;
    right: 5%;

}
</style>
