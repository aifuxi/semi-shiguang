<script setup lang="ts">
const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true
})
</script>

<template>
  <main class="grid place-items-center px-6 py-16">
    <section
      class="
        rounded-3xl border border-border bg-surface p-8 shadow-card inline-full max-inline-2xl
        sm:p-10
      "
      data-testid="starter-card"
    >
      <p class="text-sm font-medium text-brand">
        Nuxt 4 starter
      </p>
      <h1
        class="
          mbs-4 text-3xl font-semibold tracking-tight
          sm:text-4xl
        "
      >
        Nuxt TypeScript Template
      </h1>
      <p class="mbs-4 leading-7 text-muted">
        一个包含 ESLint、Tailwind CSS、Pinia、Vitest 与 Playwright 的极简 Nuxt 项目模板。
      </p>

      <div class="mbs-6 flex flex-wrap gap-2">
        <span class="rounded-full border border-border bg-canvas px-3 py-1 text-sm text-muted">Nuxt 4</span>
        <span class="rounded-full border border-border bg-canvas px-3 py-1 text-sm text-muted">Pinia</span>
        <span class="rounded-full border border-border bg-canvas px-3 py-1 text-sm text-muted">Tailwind CSS v4</span>
      </div>

      <button
        class="
          mbs-8 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-on-brand transition
          hover:opacity-90
          disabled:cursor-not-allowed disabled:opacity-60
        "
        :disabled="!isHydrated"
        type="button"
        @click="counterStore.increment"
      >
        Count is {{ count }}
      </button>
      <p class="mbs-3 text-sm text-muted">
        Double count is {{ doubleCount }}
      </p>
    </section>
  </main>
</template>
