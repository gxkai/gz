import type { Pinia, StoreDefinition } from 'pinia'

export default class Store {
  name!: 'Store'
  #root: Pinia

  #stores: StoreDefinition[]
  constructor(root: Pinia) {
    this.name = 'Store'
    this.#root = root
    this.#stores = []
  }

  public registerBatch(items: StoreDefinition[]) {
    this.#stores.push(...items)
  }
  public register(item: StoreDefinition) {
    this.#stores.push(item)
  }

  get all() {
    return this.#stores
  }
}
