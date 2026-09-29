# Nuxt TypeScript Template

这是一个基于 Nuxt 4、TypeScript、Pinia 和 Tailwind CSS v4 的项目模板，提供统一的代码规范、测试框架和 Git
提交校验。

## 技术栈

- Nuxt 4、Vue 3、TypeScript
- Pinia 与 `@pinia/nuxt`
- Tailwind CSS v4（CSS-first）
- ESLint（唯一格式化与代码校验工具）
- Vitest、`@nuxt/test-utils`、Playwright
- Husky、lint-staged、Commitlint

## 开始使用

需要 Node.js 22 或更高版本。

```bash
npm install
npm run dev
```

开发服务器默认运行在 `http://localhost:3000`。

## 常用命令

```bash
npm run format      # ESLint 全量自动修复
npm run lint        # ESLint 全量校验，禁止 warning
npm run typecheck   # Nuxt 类型检查
npm run test        # Vitest 单元测试
npm run test:e2e    # Playwright 端到端测试
npm run check       # lint、typecheck、单元测试
npm run build       # 构建生产版本
npm run generate    # 生成静态站点
```

## 项目约定

- Nuxt 应用代码位于 `app/`，页面放在 `app/pages/`，组件放在 `app/components/`，Store 放在
  `app/stores/`。
- 普通目录和文件使用 `kebab-case`，普通 Vue 组件使用 `PascalCase.vue`。
- `app.vue` 以及 `pages/`、`layouts/` 下的 Vue 文件遵循 Nuxt 文件路由约定，使用 `kebab-case`。
- Tailwind 入口为 `app/assets/css/main.css`，主题通过 `@theme inline` 和语义 Token 维护，不创建
  `tailwind.config.*`。
- 禁止引入 Prettier；格式化、代码规范、文件和目录命名、Tailwind 类名均由 ESLint 校验。
- 单元测试位于 `tests/unit/`，端到端测试位于 `tests/e2e/`。
- Git 提交使用 `type(scope): subject` 格式的 Conventional Commits。

安装依赖后 Husky 会自动启用：`pre-commit` 对暂存文件执行 ESLint 修复并运行全量 lint，`commit-msg`
使用 Commitlint 校验提交信息。

## 许可证

本项目使用 [MIT License](./LICENSE)。
