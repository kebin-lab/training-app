<template>
    <div>
      <v-container>
        <v-card style="width: 500px;">
          <v-card-title>
            <h1>{{ title }}</h1>
              <span>
                <KbnButton color="grey lighten-3"><v-icon large color="blue">mdi-minus</v-icon></KbnButton>
              </span>
          </v-card-title>
        </v-card>
      </v-container>
    </div>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton'
export default {
  components: {
    KbnButton
  },
  name: "KbnTaskCard",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>