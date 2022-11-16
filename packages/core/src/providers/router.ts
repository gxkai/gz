import type { RouteRecordRaw, Router as RouterType } from 'vue-router'

export default class Router {
  name!: 'Router'
  #root: RouterType

  constructor(root: RouterType) {
    this.name = 'Router'
    this.#root = root
  }

  public registerBatch(routes: RouteRecordRaw[]) {
    routes.forEach((route) => {
      this.register(route)
    })
  }

  public register(route: RouteRecordRaw) {
    this.#root.addRoute(route)
  }

  get all(): RouteRecordRaw[] {
    return this.#root.getRoutes()
  }
}
