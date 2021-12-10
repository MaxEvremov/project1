<template>
   <input :value="modelValue" @input="updateModelValue" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateModelValue (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.input {
    border-radius: 5px;
    margin-left: 2px;
    margin-right: 2px;
    color: black;
    background-color:rgb(250, 205, 120);
    margin-top: 9px;
}
</style>
