<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
        <v-combobox
          v-model="Region"
          label="Region"
          color="#F44336"
          required
          :items="countries">
        </v-combobox>
        </v-flex>

        <v-flex
          xs12
          md4
        >
        <v-combobox
          v-model="Catagory"
          label="Catagory"
          color="#F44336"
          required
          :items="countries"
        ></v-combobox>
        </v-flex>
                <v-flex
          xs12
          md4
        >
          <v-slider
          v-model="slider"
          thumb-label
          label="Result count"
          color="#F44336"
          thumb-color="#F44336"
        ></v-slider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data(){
      return{
        valid: false,
        Region: '',
        Catagory: '',
        slider: 20,
        countries: [
          'AA',
          'AB',
          'AD',
          'AE',
          'AF',
          'BB',
          'BC',
          'BD',
          'BK',
          'BW',
          'CA',
          'CC',
          'CE',
          'CL',
          'CO',
          'CR',
          'CS',
          'DA',
          'IN',
          'RU',
          'PH',
          'SA',
          'ZZ'
        ]
      }
    }
  }
</script>

<style>

</style>
