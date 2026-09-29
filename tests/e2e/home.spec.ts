import { expect, test } from '@playwright/test'

test('navigates with Nuxt and keeps the Pinia state', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Nuxt TypeScript Template' })).toBeVisible()
  await expect(page.locator('main')).toHaveCSS('display', 'grid')
  await expect(page.getByTestId('starter-card')).toHaveCSS('background-color', /rgb/u)

  const counter = page.getByRole('button', { name: 'Count is 0' })
  await counter.click()

  await expect(page.getByRole('button', { name: 'Count is 1' })).toBeVisible()

  await page.getByRole('link', { name: '关于', exact: true }).click()

  await expect(page).toHaveURL('/about')
  await expect(page.getByRole('heading', { name: '关于这个模板' })).toBeVisible()

  await page.getByRole('link', { name: '返回首页' }).click()

  await expect(page).toHaveURL('/')
  await expect(page.getByRole('button', { name: 'Count is 1' })).toBeVisible()
})
