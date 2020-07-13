<template>
  <v-app>
    <h1>タスク管理アプリケーション「タス君」</h1>
    <KbnTaskCard title="task1"/>
  </v-app>
</template>

<script>
import KbnTaskCard from "@/components/Molecules/KbnTaskCard.vue"
export default {
  components: {
    KbnTaskCard,
  }
}
</script>
