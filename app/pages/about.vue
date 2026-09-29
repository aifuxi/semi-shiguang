<template>
  <main class="mx-auto px-6 py-16 max-inline-3xl">
    <section
      class="
        rounded-3xl border border-border bg-surface p-8 shadow-card
        sm:p-10
      "
    >
      <p class="text-sm font-medium text-brand">
        文件路由示例
      </p>
      <h1 class="mbs-4 text-3xl font-semibold tracking-tight">
        关于这个模板
      </h1>
      <p class="mbs-4 leading-7 text-muted">
        Nuxt 根据 app/pages 自动生成路由，Pinia 则提供支持 SSR 的类型安全应用状态。
      </p>
      <NuxtLink
        class="
          mbs-6 inline-flex items-center rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-on-brand transition
          hover:opacity-90
        "
        to="/"
      >
        返回首页
      </NuxtLink>
    </section>
  </main>
</template>
