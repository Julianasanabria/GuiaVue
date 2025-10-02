import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Karen')

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function randomizeCounter() {
    count.value = Math.round(100 * Math.random())
  }

  return { count, name, doubleCount, increment, randomizeCounter }
})
