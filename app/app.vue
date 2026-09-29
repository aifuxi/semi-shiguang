<template>
  <div class="bg-canvas font-sans text-ink min-block-screen">
    <NuxtRouteAnnouncer />
    <header class="border-be border-border bg-surface">
      <nav
        class="mx-auto flex items-center justify-between px-6 py-4 max-inline-5xl"
        aria-label="主导航"
      >
        <NuxtLink
          class="font-semibold text-ink"
          to="/"
        >
          Nuxt Template
        </NuxtLink>
        <div class="flex items-center gap-2">
          <NuxtLink
            class="
              rounded-lg px-3 py-2 text-sm font-medium text-muted transition
              hover:bg-canvas hover:text-ink
            "
            to="/"
          >
            首页
          </NuxtLink>
          <NuxtLink
            class="
              rounded-lg px-3 py-2 text-sm font-medium text-muted transition
              hover:bg-canvas hover:text-ink
            "
            to="/about"
          >
            关于
          </NuxtLink>
        </div>
      </nav>
    </header>

    <NuxtPage />
  </div>
</template>
