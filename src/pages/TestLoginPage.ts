import { Locator, Page, expect } from '@playwright/test'

export default class TestLoginPage {
  page: Page
  baseUrl: string
  pageHeading: Locator
  usernameInput: Locator
  passwordInput: Locator
  loginButton: Locator

  constructor(page: Page) {
    this.page = page
    this.baseUrl = 'https://practice.expandtesting.com'
    this.pageHeading = page.getByRole('heading', {
      name: 'Test Login page',
      level: 1,
    })
    this.usernameInput = page.getByRole('textbox', { name: 'username' })
    this.passwordInput = page.getByRole('textbox', { name: 'password' })
    this.loginButton = this.page.getByRole('button', { name: 'Login' })
  }

  async goto() {
    await this.page.goto(`${this.baseUrl}/login`)
  }

  async verifyPageContent() {
    await expect(this.pageHeading).toBeVisible({ timeout: 10_000 })
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await expect(this.loginButton).toBeEnabled()

    // const loginPromise = this.page.waitForResponse(`${this.baseUrl}/login`)
    await this.loginButton.click()

    // @todo rework later ;-)
    // const [response] = await Promise.all([
    //   loginPromise,
    //   this.loginButton.click(),
    // ])

    // expect(response.status()).toBe(302)
  }
}
