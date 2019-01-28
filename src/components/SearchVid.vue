<template>
  <v-form>
    <v-container>
      <form class="flex">
        <v-combobox
          class="box"
          v-model="Region"
          label="Region"
          color="#F44336"
          spellcheck="false"
          required
          :items="countries">
        </v-combobox>
        <v-combobox
          class="box"
          v-model="Catagory"
          label="Catagory"
          color="#F44336"
          spellcheck="false"
          required
          :items="Cat">
        </v-combobox>
        <v-slider
          class="box"
          v-model="slider"
          label="Result count:"
          color="#F44336"
          thumb-color="#F44336"
          thumb-label="always"
          step="10">
        </v-slider>
      </form>
    </v-container>
    <v-alert
      :value="error"
      color="error"
      icon="warning"
      outline
    >
      {{error}}
    </v-alert>
  </v-form>
</template>

<script>
  import {mapActions,mapState} from 'vuex'
  export default {
    data(){
      return{
        Region: 'United States of America - US',
        Catagory:'Music (10)',
        slider: 20,
        Cat: [
          'Film & Animation (1)',
          'Autos & Vehicles (2)',
          'Music (10)',
          'Pets & Animals (15)',
          'Sports (17)',
          'Short Movies (18)',
          'Travel & Events (19)',
          'Gaming (20)',
          'Videoblogging (21)',
          'People & Blogs (22)',
          'Comedy (23)',
          'Entertainment (24)',
          'News & Politics (25)',
          'Howto & Style (26)',
          'Education (27)',
          'Science & Technology (28)',
          'Nonprofits & Activism (29)',
          'Movies (30)',
          'Anime/Animation (31)',
          'Action/Adventure (32)',
          'Classics (33)',
          'Comedy (34)',
          'Documentary (35)',
          'Drama (36)',
          'Family (37)',
          'Foreign (38)',
          'Horror (39)',
          'Sci-Fi/Fantasy (40)',
          'Thriller (41)',
          'Shorts (42)',
          'Shows (43)',
          'Trailers (44)'
        ],
        countries: [
          'Afghanistan - AF',
          'Albania - AL',
          'Algeria - DZ',
          'Aland Iceland - AX',
          'Antartica - AQ',
          'Argentina - AR',
          'Australia - AU',
          'Austria - AT',
          'Bahamas - BS',
          'Bahrain - BH',
          'Bangladesh - BD',
          'Belgium - BE',
          'Bermuda(UK) - BM',
          'Bhutan - BT',
          'Bolivia - BO',
          'Brazil - BR',
          'Brunei Darussalam - BN',
          'Bulgaria - BG',
          'Combodia - KH',
          'Cameroon - CM',
          'Canada - CA',
          'Chad - TD',
          'Chile - CL',
          'China - CN',
          'Colombia - CO',
          'Costa Rica - CR',
          'Croatia - HR',
          'Cuba - CU',
          'Denmark - DK',
          'Domnicia - DM',
          'Ecuador - EC',
          'Egypt - EG',
          'England - GB',
          'Estonia - EE',
          'Ethiopia - ET',
          'Fiji - FJ',
          'Finland - FI',
          'France - FR',
          'Gabon - GA',
          'Germany - DE',
          'Ghana - GH',
          'Greece - GR',
          'Honduras - HN',
          'Hong Kong - HK',
          'Hungary - HU',
          'Iceland - IS',
          'India - IN',
          'Indonesia - ID',
          'Iran - IR',
          'Iraq - IQ',
          'Ireland - IE',
          'Israel - IL',
          'Italy - IT',
          'Jamaica - JM',
          'Japan - JP',
          'Jordan - JO',
          'Kazakhstan - KZ',
          'Kenya - KE',
          'Kuwait - KW',
          'Lebanon - KB',
          'Malawi - MW',
          'Malaysia - MY',
          'Maldives - MV',
          'Mali - ML',
          'Mexico - MX',
          'Morocco - MA',
          'Myanmar - MM',
          'Namibia - NA',
          'Nepal - NP',
          'Netherlands - NL',
          'New Zealand - NZ',
          'Nigeria - NG',
          'North Korea - KP',
          'Norway - NO',
          'Oman - OM',
          'Pakistan - PK',
          'Palestine - PS',
          'Panama - PA',
          'Papua New Guinea - PG',
          'Paraguay - PY',
          'Peru - PE',
          'Phillipines - PH',
          'Poland - PL',
          'Portugal - PT',
          'Qatar - QA',
          'Russia - RU',
          'Russia - RU',
          'Saudi Arabia - SA',
          'Senegal - SN',
          'Serbia - RS',
          'Singapore - SG',
          'Slovakia - SK',
          'Somalia - SO',
          'South Africa - ZA',
          'South Korea - KR',
          'Spain - ES',
          'Sri Lanka - LK',
          'Sudan - SD',
          'Sweden - SE',
          'Switzerland - CH',
          'Syria - SY',
          'Taiwan - TW',
          'Thailand - TH',
          'Trinidad & Tobago - TT',
          'Tunisia - TN',
          'Turkey - TR',
          'Uganda - UG',
          'Ukraine - UA',
          'United Arab Emirates - AE',
          'United Kingdom - GB',
          'United States of America - US',
          'Uruguay - UY',
          'Venezuela - VE',
          'Vietnam - VN',
          'Yemen - YE',
          'Zamibia - ZM',
          'Zimbabwe - ZW'
        ]
      }
    },methods:{
      ...mapActions(['assignRC','assignVC','assignMR','assignE','removeE']),
    },
    computed: {
    ...mapState(['error'])
    },
    watch:{
      Region: function(val){
        var myRe = /(?<=- ).*/;
        var value = myRe.exec(val); 
        this.assignRC(value[0])
      },
      Catagory: function(val){
        var myRe = /\d+/;
        var value = myRe.exec(val); 
        this.assignVC(value[0])
      },
      slider: function(val){
        if(val>0){
         this.assignMR(val)
         this.removeE()
        }else{
          this.assignE ('Result Count must be greater than 0')
        }
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
.box{
  min-width: 300px;
  padding: 20px
}
</style>
