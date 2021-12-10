import { ref, computed } from 'vue'

export default function useSortedTasks (sortedTasks) {
  const searchQuery = ref('')
  const sortedAndSearchedTasks = computed(() => {
    return sortedTasks.value.filter(task => task.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })
  return {
    searchQuery, sortedAndSearchedTasks
  }
}
