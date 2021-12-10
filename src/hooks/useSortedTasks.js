import { ref, computed } from 'vue'

export default function useSortedTasks (tasks) {
  const selectedSort = ref('')
  const sortedTasks = computed(() => {
    return [...tasks.value].sort((task1, task2) => task1[selectedSort.value]?.localCompare(task2[selectedSort.value]))
  })
  return {
    selectedSort, sortedTasks
  }
}
