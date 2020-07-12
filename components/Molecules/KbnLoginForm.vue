<template>
    <v-app>
        <v-main>
            <KbnInput formType="input" inputType="text" >E-mail</KbnInput>
            <KbnInput formType="input" inputType="password">Password</KbnInput>
            <KbnButton @click="Login">ログインする</KbnButton>
        </v-main>
    </v-app>
</template>

<script>
import KbnButton from "@/conponents/atoms/KbnButton.vue"
import KbnInput from "@/conponents/atoms/KbnInput.vue"
import KbnIcon from "@/conponents/atoms/KbnIcon.vue"
export default {
    components: {
        KbnButton,
        KbnIcon,
        KbnInput
    },
    methods: {
        Login() {

        },
    }
}
</script>