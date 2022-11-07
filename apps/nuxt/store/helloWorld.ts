import { defineStore } from 'pinia'
import { helloWorld } from 'gz-pinia-store'
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useHelloWorld = defineStore('helloWorld', helloWorld)
