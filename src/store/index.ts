import { defineStore } from 'pinia'

interface State {
    UserId: string | null
  }
  
  export const useUserStore = defineStore('user', {
    state: (): State => {
      return {
        UserId: null,
      }
    },
  })