<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>
<style>
.button {
    margin-top: 10px;
    background-color:rgb(250, 205, 120);
    border-radius: 6px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>
