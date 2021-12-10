<template>
 <div id="App" class="app">
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
        v-model="selectedSort"
      >
      </my-select>
    </div>
    <div class="searchInput" v-show="findinginput">
        <my-input
          placeholder="поиск..."
          v-model= "searchQuery"
          v-focus
          >
        </my-input>
        <my-button>
            Найти
        </my-button>
        <my-button
          @click="showFindidngInput">
            Закрыть
        </my-button>
    </div>
   <hr>
   <modalWindow
      :dialogTask = "dialogTask"
      @close = "closeWindow"
      @delete = "removeElement"
      v-if="dialogTask !== null"
   />
   <div v-if="isTasksLoading" class="loading">
      <h2>Идёт загрузка, подождите...
      </h2>
      <loader/>
    </div>
   <tasksList v-else
      :tasks = "selectedTasks"
      @remove = "removeElement"
      @open = "getRequiredElement"
   />
   <div v-intersection ="loadMoreTasks" :page = "page" class="observer"></div>
 </div>
</template>

<script>
import buttonbar from '@/components/Buttonbar'
import inputbar from '@/components/Inputbar'
import modalWindow from '@/components/ModalWindow'
import tasksList from '@/components/TasksList'
import loader from '@/components/Loader'

export default {
  name: 'App',
  data () {
    return {
      options: [
        { id: 1, name: 'По названию', value: 'title' },
        { id: 2, name: 'По айди', value: 'id' },
        { id: 3, name: 'По комментарию', value: 'body' }
      ],
      tasks: [],
      dialogVisisble: false,
      syncVisible: false,
      dialogTask: null,
      nameValue: '',
      findinginput: false,
      searchQuery: '',
      isTasksLoading: true,
      pageNumber: 1,
      limit: 10,
      totalPages: '',
      page: 1,
      loadMoreTasks: false,
      selectedSort: ''
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
      this.dialogVisisble = !(this.dialogVisisble)
    },
    showSortMenu () {
      this.syncVisible = !(this.syncVisible)
    },
    closeDialog () {
      this.dialogVisisble = !(this.dialogVisisble)
    },
    deleteAllTasks () {
      this.tasks = []
    },
    // sortFunction (field) {
    //   return (a, b) => a[field] > b[field] ? 1 : -1
    // },
    // applySortWithOption (field) {
    //   this.tasks.sort(this.sortFunction(field))
    // },
    showFindidngInput () {
      this.findinginput = !(this.findinginput)
    },
    setup (props) {
      const { tasks, isTasksLoading, totalPages } = this.useTasks(10)
      const { selectedSort, sortedTasks } = this.useSortedTasks(tasks)
      const { searchQuery, sortedAndSearchedTasks } = this.useSortedAndSearchedTasks(sortedTasks)
      return {
        tasks,
        totalPages,
        isTasksLoading,
        sortedTasks,
        selectedSort,
        searchQuery,
        sortedAndSearchedTasks
      }
    }
  },
  components: {
    buttonbar,
    inputbar,
    tasksList,
    modalWindow,
    loader
  }
}
</script>
<style>
.loading {
   border: solid 1px black ;
  -webkit-text-stroke: 0.5px #000000;
  color: rgb(250, 205, 120);
  border-radius: 20px;
  width: 470px;
  height: 180px;
  background-color: rgb(125, 165, 165);
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.searchInput {
  border: solid 1px black ;
  color: black;
  border-radius: 20px;
  width: 370px;
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
  margin-top: 60px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.page__wrapper {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
}
.page {
  margin-left: 1px;
  font-size: 20px;
  margin-top: 5px;
  color: #000000;
  background-color: rgb(125, 165, 165);
  border-radius: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  padding: 10px;
}
.currentPage {
  margin-top: -5px;
  font-size: 20px;
  color: #000000;
  background-color: rgb(250, 205, 120);
  border-radius: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  padding: 10px;
}
.observer {
  height: 30px;
}
</style>
