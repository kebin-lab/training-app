<template>
  <v-layout
    column
    justify-center
    align-center
  >
  <h1>タスク管理アプリケーション「タス君」</h1>
  
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import KbnButton from '@/components/atoms/KbnButton.vue'
import KbnInput from '@/components/atoms/KbnInput.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    KbnButton,
    KbnInput
  }
}
</script>
