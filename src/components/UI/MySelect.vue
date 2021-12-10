<template>
    <div class="selectWindow" v-if="show"
        >
        <div class="selectName">
        <h2 class="selectNameH2">
            Сортировать
        </h2>
        </div>
        <select
            class="selectInput"
            v-model="nameValue"
            @change="changeOption">
            <option
                v-for="option in options"
                :key="option.value"
                :value="option"
                >
                {{ option.name}}
            </option>
            <slot></slot>
        </select>
        <div>
            <my-button @click="hideDialog" class="closeSelectButton">
                Закрыть
            </my-button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'my-select',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption () {
      const sortParameter = this.nameValue.value
      this.$emit('option', sortParameter)
    },
    hideDialog () {
      this.$emit('update:show', false)
    }
  }
}
</script>
<style>
.closeSelectButton {
    margin-top: 18px;
}
.selectWindow {
  font-size: 20px;
  border: solid 1px black ;
  color: rgb(250, 205, 120);
  border-radius: 20px;
  width: 530px;
  height: 60px;
  background-color: rgb(125, 165, 165);
  margin-left: auto;
  margin-right: auto;
}
.selectNameH2 {
  -webkit-text-stroke: 0.6px #000000;
  float: left;
  font-size: 22px;
  color: rgb(250, 205, 120);
  width: 180px;
  height: 20px;
  background-color: rgb(125, 165, 165);
}
.selectInput {
  border-radius: 10px;
  border: solid 1px black;
  float: left;
  font-size: 20px;
  color: black;
  width: 240px;
  height: 40px;
  background-color: rgb(250, 205, 120);
  margin-top: 10px;
  margin-right: 10px;
}
</style>
