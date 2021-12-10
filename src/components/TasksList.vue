<template>
  <div v-show="tasks.length > 0">
    <h2 id = "list">Список</h2>
      <transition-group name="animation-list" tag="p">
        <task
          v-for="task in tasks"
          :task= "task"
          :key="task.id"
          @open="$emit('open',task)"
          @remove="$emit('remove',task)"
        />
      </transition-group>
  </div>
<h2 id ="list" v-show="tasks.length === 0">
  Список заданий пуст
  </h2>
    <hr>
</template>

<script>
import task from '@/components/Task.vue'
export default {
  components: { task },
  props: {
    tasks: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.animation-list-item {
  display: inline-block;
  margin-right: 10px;
}
.animation-list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.animation-list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.animation-list-move {
  transition: transform 0.5s;
}
#list {
  margin-top: 20px;
  -webkit-text-stroke: 0.5px #000000;
  border: solid 1px black ;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 270px;
  height: 30px;
  background-color: rgb(125, 165, 165);
  color: rgb(250, 205, 120);
}
.taskid {
  color: #000000;
   border: solid 1px black ;
  border-radius: 10px;
  align-items: center;
  width: 200px;
  height: 20px;
  float: left;
  margin-top: 10px;
  margin-left: 40px;
  background-color: rgb(250, 205, 120);
}
#text {
  color: #000000;
  border: solid 1px black ;
  border-radius: 5px;
  align-items: center;
  width: 200px;
  height: 80px;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  background-color: rgb(250, 205, 120);
}

#elementbutton {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
    color: black;
    background-color:rgb(250, 205, 120);
    margin-top: 32px;
}

</style>
