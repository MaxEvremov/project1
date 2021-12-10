<template>
   <div class="taskItem" >
        <div id="text" class="TaskHead" >{{ task.title }}</div>
        <div id="text" class="TaskHead" >{{ task.body }}</div>
        <my-button
            @click="$emit('open',task)">
            Открыть
        </my-button>
        <my-button
            @click="$emit('remove',task)">
            Удалить
        </my-button>
        <div class="taskid">Номер {{ task.id }}</div>
    </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
.TaskHead {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.taskItem {
  border: solid 1px black ;
  width: 700px;
  height: 100px;
  background-color: rgb(125, 165, 165);
  border-radius:10px ;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
