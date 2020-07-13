<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
              <v-card height="100px" style="width: 70%;">
                <v-card-text>
                  <v-form>
                    <KbnInput inputType="email" v-model="email">E-mail</KbnInput>
                    <KbnInput inputType="Password" v-model="password">Password</KbnInput>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer>
                    <KbnButton>ログインする</KbnButton>
                  </v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import KbnButton from "@/components/atoms/KbnButton.vue"
import KbnInput from "@/components/atoms/KbnInput.vue"
export default {
    components: {
        KbnButton,
        KbnInput
    },
    data() {
        return {
            email: "",
            password:""
        }
    },
    methods: {
        Login() {

        },
    }
}
</script>