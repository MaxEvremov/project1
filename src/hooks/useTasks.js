import axios from 'axios'
import { ref, onMounted } from 'vue'

export default function useTasks (limit) {
  const tasks = ref([])
  const totalPages = ref(0)
  const isTasksLoading = ref(true)
  const fetching = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: 1,
          __limit: limit
        }
      })
      totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
      tasks.value = response.data
    } catch {
      alert('ошибка')
    } finally {
      isTasksLoading.value = false
    }
  }
  onMounted(fetching)
  return {
    tasks, isTasksLoading, totalPages
  }
}
