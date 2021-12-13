import { ref, computed } from 'vue'

export default function useSortedTasks (sortedTasks) {
  const searchQuery = ref('')
  let sortedAndSearchedTasks = ref([])
  const sorted = (query) => {
    if (sortedTasks) {
      sortedAndSearchedTasks = computed(() => {
        return sortedTasks.value.filter(task => task.value.toLowerCase().includes(query.toLowerCase()))
      })
      console.log('Поле сортировки не пустое')
    } else {
      sortedAndSearchedTasks = sortedTasks
      console.log('поле сортировки пустое')
    }
  }
  sorted(searchQuery.value)
  return {
    searchQuery, sortedAndSearchedTasks
  }
}
