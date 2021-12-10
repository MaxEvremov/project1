<template>
    <div id='inputbar'>
        <my-button
          @click="createElement">
          Добавить
        </my-button>
        <my-input
          v-focus
          v-model="task.title"
          type="text"
          placeholder="Введите Заголовок"
          />
        <my-input
          v-model="task.body"
          class="inputText"
          type="text"
          placeholder="Введите Комментарий"
          />
          <my-button
          @click="$emit('closeBar')">
          Закрыть
        </my-button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      task: {
        title: '',
        date: '',
        text: ''
      }
    }
  },
  methods: {
    createElement () {
      this.task.id = Date.now()
      this.$emit('create', this.task)
      this.task = {
        title: '',
        date: '',
        text: ''
      }
    }
  }
}
</script>

<style>
#inputbar {
    border: solid 1px black ;
    border-radius: 20px;
    width: 580px;
    height: 42px;
    background-color: rgb(125, 165, 165);
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}
</style>
