<template>
    <v-app>
        <v-main>
            <v-btn large :color="color"
            v-bind="$attrs"
            v-on="$listeners"><slot /></v-btn>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "KbnButton",
    props: {
        color: {
            type: String,
            default: "primary"
        }
    }
}
</script>