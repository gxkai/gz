import Router from './providers/router'
import Store from './providers/store'
import Component from './providers/component'
import type { Pinia } from 'pinia'
import type { Router as RouterType } from 'vue-router'
import type { App } from 'vue'
export type ProviderNames = 'Router' | 'Store' | 'Component'

export interface IContext {
  Router: Router
  Store: Store
  Component: Component
}

type Constructor<T> = new (...args: any[])=> T

class ContextAdapter {
  #providerNames!: ProviderNames[]

  constructor() {
    this.#providerNames = []
  }

  register<T extends { name: ProviderNames }>(Provider: Constructor<T>, root: any) {
    const service = new Provider(root)
    const providerName = service.name

    if (this.#providerNames.includes(providerName)) {
      // eslint-disable-next-line no-throw-literal
      throw `provider ${providerName} exists!`
    }

    this.#providerNames.push(providerName)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    this[providerName] = service
  }
}

export class Core {
  readonly #context: IContext

  constructor({ router, store, app }: {router: RouterType, store: Pinia, app: App}) {
    const context = new ContextAdapter()

    context.register(Router, router)
    context.register(Store, store)
    context.register(Component, app)
    this.#context = context as unknown as IContext
  }

  registerBatch(items: any[]) {
    items.forEach((item) => {
      this.register(item)
    })
  }

  register(item: any) {
    new item(this.#context)
  }
  get context() {
    return this.#context
  }
}
