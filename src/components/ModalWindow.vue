<template>
<div class="window1">
    <div id="modalWindow" class="modalwindow" v-for="task in dialogTask"
      :key="task.id">
        <div id="title" class="idwindow">Индекс: {{task.id}}</div>
        <div id="title" class="titlewindow">{{task.title}}</div>
        <div id="textarea" class="textwindow">{{task.body}}</div>
        <my-button
          id="modalbutton"
          class="modaltclosebutton"
          @click="$emit('close')">
          Закрыть
        </my-button>
        <my-button
          id="modalbutton"
          class="modaldeletebutton"
          @click="$emit('delete',task)">
          Удалить
        </my-button>
    </div>
</div>
</template>

<script>
export default {
  props: {
    dialogTask: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.window1 {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
}
#modalWindow {
  display: block;
  border: solid 1px black ;
  border-radius: 20px;
  background-color: rgb(125, 165, 165);
  width: 500px ;
  height: 400px ;
  margin-right: auto;
  margin-left: auto;
}

.titlewindow {
  color: black;
  border: solid 1px black ;
  border-radius: 10px;
  width: 470px;
  height: 40px;
  float: left;
  margin-top: 15px;
  margin-left: 15px;
  background-color: rgb(250, 205, 120);
}
.idwindow {
  color: black;
  border: solid 1px black ;
  border-radius: 10px;
  width: 400px;
  height: 40px;
  float: left;
  margin-top: 15px;
  margin-left: 48px;
  background-color: rgb(250, 205, 120);
}
#textarea {
  color: black;
  border: solid 1px black ;
  border-radius: 10px;
  align-items: center;
  width: 470px;
  height: 220px;
  float: left;
  margin-top: 15px;
  margin-left: 15px;
  background-color: rgb(250, 205, 120);
}

#modalbutton {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
    color: black;
    background-color:rgb(250, 205, 120);
    margin-top: 12px;
}

</style>
