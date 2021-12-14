
import { ref, computed } from 'vue'

export default function useSortedTasks (tasks) {
  const selectedSort = ref('')

  const sortedTasks = computed(() => {
    if (selectedSort.value === 'id') {
      return [...tasks.value].sort((task1, task2) => task1[selectedSort.value] < (task2[selectedSort.value]))
    } else {
      return [...tasks.value].sort((task1, task2) => task1[selectedSort.value]?.localeCompare(task2[selectedSort.value]))
    }
  })
  return {
    selectedSort, sortedTasks
  }
}
