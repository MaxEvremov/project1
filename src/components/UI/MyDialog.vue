<template>
    <div class="dialog" v-if="show"
    @click="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin'
export default {
  name: 'my-dialog',
  mixins: [toggleMixin]
}
</script>

<style>
#dialog {
    position: fixed;
    display: flex;
}
#dialog__content {
    margin: auto;
    border: solid 1px black ;
    border-radius: 20px;
    width: 800px;
    height: 40px;
    background-color: rgb(125, 165, 165);
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}
</style>
