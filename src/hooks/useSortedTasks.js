import { ref, computed } from 'vue'

export default function useSortedTasks (tasks) {
  console.log(tasks.value)
  console.log(tasks)
  const selectedSort = ref('')
  let sortedTasks = ref([])
  const sorting = (value) => {
    if (value) {
      sortedTasks = computed(() => {
        return [tasks.value].sort((task1, task2) => task1[selectedSort.value]?.localCompare(task2[selectedSort.value]))
      })
      console.log('Поле сортировки не пустое')
    } else {
      sortedTasks = tasks
      console.log('поле сортировки пустое')
    }
  }
  sorting(selectedSort.value)
  return {
    selectedSort, sortedTasks
  }
}
