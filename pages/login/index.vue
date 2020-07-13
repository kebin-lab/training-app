<template>
  <v-app>
      <v-container>
        <h1>ログインページ</h1>
        <KbnLoginForm />
      </v-container>
  </v-app>
</template>

<script>
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'
import KbnButton from '@/components/atoms/KbnButton.vue'
import KbnInput from '@/components/atoms/KbnInput.vue'

export default {
  components: {
    KbnLoginForm,
    KbnButton,
    KbnInput
  }
}
</script>