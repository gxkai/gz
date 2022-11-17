import type { IContext } from '@guzh/core'
import { useCounterStore } from './stores/counter'
import { router } from './router'

export class Home {
  constructor(ctx: IContext) {
    ctx.Store.registerBatch([useCounterStore])
    ctx.Router.registerBatch(router)
  }
}
