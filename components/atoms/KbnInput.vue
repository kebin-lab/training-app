<template>
  <div>
    <label><slot /></label>
    <!-- formTypeとInputTypeで場合分け -->
    <v-text-field 
        v-if="formType === 'input'" 
        :type="inputType" 
        :value="value"
        v-bind="$attrs"
    ></v-text-field>
    <v-textarea 
        v-if="formType === 'textarea'" 
        :value="value" 
        clearable=true
    ></v-textarea>
  </div>
</template>

<script>
export default {
    name: "KbnForm",
    props: {
        formType: {
            type: String,
            default: "input"
        },
        inputType: {
            type: String,
            default: "text"
        },
        value: {
            type: String,
            default: ''
        }
    }
}
</script>