<template>
  <v-form>
    <v-container>
      <v-row class="px-md-12">

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="first"
            label="Your Name"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="last"
            label="Your Mail"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12">
        <v-textarea
          outlined
          name="input-7-4"
          label="Your Message"
          value=""
        ></v-textarea>
      </v-col>

      <v-flex xs12 offset-xs10>
        <div class="my-2" >
          <v-btn large color="primary">Submit</v-btn>
        </div>                   
      </v-flex>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      first: '',
      last: '',
    }),
  }
</script>