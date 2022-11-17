import { createRouter, createWebHistory } from 'vue-router'
import { config } from '@/config'

export const router = createRouter({
  history: createWebHistory(config.basePath),
  routes: [],
})
