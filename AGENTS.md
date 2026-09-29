# 项目协作规范

## 通用

- 默认使用简体中文；代码、命令、文件名和 API 名称保留原文。
- Web 使用 TypeScript、Nuxt 4、Vue 3、Pinia、Tailwind CSS v4 和 ESLint，禁止使用 Prettier。
- ESLint 是唯一的代码格式化和代码规范校验工具。

## 样式

- Tailwind CSS 使用 CSS-first 配置，入口为 `app/assets/css/main.css`，禁止创建 `tailwind.config.*`。
- 主题通过 `@theme inline` 和语义 Token 维护，组件优先使用 Tailwind utility。
- Tailwind 类名必须通过 ESLint 的排序、换行、canonical、重复、冲突和未知类校验。

## 命名

- 普通目录和文件使用 `kebab-case`。
- 普通 Vue 组件文件使用 `PascalCase.vue`，JSX 和 TSX 文件使用 `kebab-case`。
- `app.vue` 及 `app/pages/`、`app/layouts/` 下的 Vue 文件遵循 Nuxt 约定，使用 `kebab-case`。
- `README.md`、`AGENTS.md`、点目录和生态工具固定名称不受普通文件规则约束。

## 应用结构

- 使用 Nuxt 4 默认的 `app/` 目录结构和 `app/pages/` 文件路由，不手写 Vue Router 实例。
- 跨组件应用状态使用 Pinia，Store 放在 `app/stores/`；组件私有状态保留在组件内。
- 服务端 API 和服务端工具分别放在 `server/api/`、`server/utils/`。

## 测试

- 单元测试使用 Vitest 与 `@nuxt/test-utils`，放在 `tests/unit/`。
- 端到端测试使用 Playwright，放在 `tests/e2e/`。
- 修改行为时同步更新对应测试。

## Git

- Git 提交遵循 Angular / Conventional Commits：`type(scope): 简体中文描述`。
- type 限定为 `feat`、`fix`、`docs`、`style`、`refactor`、`perf`、`test`、`build`、`ci`、`chore`、
  `revert`。
- 用户只要求提交代码时，不执行 build。
