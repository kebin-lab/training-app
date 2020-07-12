<template>
    <v-app>
        <v-main>
            <label><slot /></label>
            <!-- formTypeとInputTypeで場合分け -->
            <v-text-field 
                v-if="formType === 'input'" 
                :type="inputType ? 'text' : 'password'" 
                :value="value"
                v-bind="$attrs"
                @input="$emit('input', $event.target.value)">
            </v-text-field>
            <v-textarea 
                v-if="formType === 'testarea'" 
                :value="value" 
                clearable=true
                @input="$emit('input', $event.target.value)">
            </v-textarea>
        </v-main>
    </v-app>
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
            default: ""
        }
    }
}
</script>