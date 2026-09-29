import { mountSuspended } from '@nuxt/test-utils/runtime'
import { beforeEach, describe, expect, it } from 'vitest'
import StarterCard from '../../app/components/StarterCard.vue'
import { useCounterStore } from '../../app/stores/counter-store'

describe('StarterCard', () => {
  beforeEach(() => {
    useCounterStore().reset()
  })

  it('increments the Pinia counter after a click', async () => {
    const wrapper = await mountSuspended(StarterCard)
    const counter = wrapper.get('button')

    expect(counter.text()).toBe('Count is 0')
    expect(wrapper.text()).toContain('Double count is 0')

    await counter.trigger('click')

    expect(counter.text()).toBe('Count is 1')
    expect(wrapper.text()).toContain('Double count is 2')
  })
})
