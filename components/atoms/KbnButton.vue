<template>
  <div>
    <v-btn large :color="color"
    v-bind="$attrs"
    v-on="$listeners"><slot /></v-btn>
  </div>
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