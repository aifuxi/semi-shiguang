import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useCounterStore } from '../../app/stores/counter-store'

describe('counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('updates and resets the counter', () => {
    const counterStore = useCounterStore()

    expect(counterStore.count).toBe(0)
    expect(counterStore.doubleCount).toBe(0)

    counterStore.increment()

    expect(counterStore.count).toBe(1)
    expect(counterStore.doubleCount).toBe(2)

    counterStore.reset()

    expect(counterStore.count).toBe(0)
  })
})
