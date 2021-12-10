<template>
 <div id="App">
   <h1 id="h1">Список </h1>
    <buttonbar
      @newElement = "showDialog"
      @deleteAll = "deleteAllTasks"
      @sort = "showSortMenu"
      @find = "showFindidngInput"
    />
    <my-dialog
      v-model:show.sync="dialogVisisble">
      <inputbar
      @create = "newElement"
      @closeBar = "closeDialog"
      />
    </my-dialog>
    <div>
      <my-select
        :options = "options"
        v-show="tasks.length !== 0"
        v-model:show.sync="syncVisible"
        @option = "applySortWithOption"
      >
      </my-select>
    </div>
    <div class="searchInput" v-show="findinginput">
        <my-input
          placeholder="поиск..."
          v-model= "searchQuery"
          >
        </my-input>
        <my-button>
            Найти
        </my-button>
    </div>
   <hr>
   <modalWindow
      :dialogTask = "dialogTask"
      @close = "closeWindow"
      @delete = "removeElement"
      v-if="dialogTask !== null"
   />
   <tasksList
      :tasks = "tasks"
      @remove = "removeElement"
      @open = "getRequiredElement"
   />
 </div>
</template>

<script>
import buttonbar from '@/components/Buttonbar'
import inputbar from '@/components/Inputbar'
import modalWindow from '@/components/ModalWindow'
import tasksList from '@/components/TasksList'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      options: [
        { id: 1, name: 'По названию', sortby: 'title' },
        { id: 2, name: 'По айди', sortby: 'id' },
        { id: 3, name: 'По комментарию', sortby: 'body' }
      ],
      tasks: [
        // { id: 1, title: 'Изучить js', date: '25.12.2021', text: '111' },
        // { id: 2, title: 'Изучить Python', date: '10.05.2022', text: '222' },
        // { id: 3, title: 'Изучить C++', date: '08.09.2021', text: '333' },
        // { id: 4, title: 'Изучить мироздание', date: '25.12.2022', text: '444' }
      ],
      dialogVisisble: false,
      syncVisible: false,
      dialogTask: null,
      nameValue: '',
      findinginput: false,
      searchQuery: ''
    }
  },
  methods: {
    newElement (task) {
      this.tasks.push(task)
    },
    removeElement (task) {
      this.tasks = this.tasks.filter(p => p.id !== task.id)
      this.dialogTask = null
    },
    getRequiredElement (task) {
      this.dialogTask = this.tasks.filter(p => p.id === task.id)
      console.log(this.dialogTask)
    },
    closeWindow () {
      this.dialogTask = null
      console.log(this.dialogTask)
    },
    showDialog () {
      this.dialogVisisble = true
    },
    showSortMenu () {
      this.syncVisible = true
    },
    closeDialog () {
      this.dialogVisisble = false
    },
    deleteAllTasks () {
      this.tasks = []
    },
    sortFunction (field) {
      return (a, b) => a[field] > b[field] ? 1 : -1
    },
    applySortWithOption (field) {
      this.tasks.sort(this.sortFunction(field))
    },
    showFindidngInput () {
      this.findinginput = !(this.findinginput)
    },
    async fetchTasks () {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=40')
        this.tasks = response.data
      } catch {
        alert('ошибка')
      }
    }
  },
  components: {
    buttonbar,
    inputbar,
    tasksList,
    modalWindow
  },
  mounted () {
    this.fetchTasks()
  }
}
</script>
<style>
.searchInput {
  border: solid 1px black ;
  color: black;
  border-radius: 20px;
  width: 280px;
  height: 40px;
  background-color: rgb(125, 165, 165);
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
#h1 {
  border: solid 1px black ;
  -webkit-text-stroke: 1px #000000;
  color: rgb(250, 205, 120);
  border-radius: 20px;
  width: 150px;
  height: 40px;
  background-color: rgb(125, 165, 165);
  margin-left: auto;
  margin-right: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
