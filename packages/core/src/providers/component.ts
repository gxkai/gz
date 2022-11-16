import type { App, Component as VueComponent } from 'vue'

type ComponentType = 'layout' | 'primevue'

type Cmp = {
  name: string
  component: VueComponent
}

type RegisterCmp<T> = {
  type: ComponentType
  cmp: T
}

export default class Component {
  name!: 'Component'
  #root: App
  components!: {
    layout: Cmp[]
    primevue: Cmp[]
  }

  constructor(root: App) {
    this.name = 'Component'
    this.#root = root
    this.components = {
      layout: [],
      primevue: [],
    }
  }

  public registerBatch(items: RegisterCmp<any>[]) {
    items.forEach((item) => {
      this.register(item)
    })
  }

  public register<T extends Cmp>(item: RegisterCmp<T>) {
    if (item.cmp.name === undefined) {
      // eslint-disable-next-line no-throw-literal
      throw 'Missing prop name in component'
    }

    this.#root.component(item.cmp.name, item.cmp.component)

    this.components[item.type].push({
      name: item.cmp.name,
      component: item.cmp.component,
    })
  }
}
