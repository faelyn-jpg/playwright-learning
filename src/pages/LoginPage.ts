import { Locator, Page, expect } from '@playwright/test'

export default class LoginPage {
  page: Page
  baseUrl: string
  pageHeading: Locator
  emailInput: Locator
  passwordInput: Locator
  signinButton: Locator
  profileHeading: Locator
  pageAlert: Locator

  constructor(page: Page) {
    this.page = page
    this.baseUrl = 'https://practice.expandtesting.com/bookstore'
    this.pageHeading = page.getByRole('heading', {
      name: 'Sign In',
      level: 1,
    })
    this.emailInput = page.getByRole('textbox', { name: 'Email' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.signinButton = page.getByRole('button', { name: 'Sign in' })
    this.profileHeading = page.getByRole('heading', { name: 'Profile' })
    this.pageAlert = page.getByRole('alert')
  }

  async goto() {
    await this.page.goto(`${this.baseUrl}/user/signin`)
  }

  async verifyPageContent() {
    await expect(this.pageHeading).toBeVisible({ timeout: 10_000 })
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await expect(this.signinButton).toBeEnabled()

    const loginPromise = this.page.waitForResponse(
      `${this.baseUrl}/user/signin`
    )
    const [response] = await Promise.all([
      loginPromise,
      this.signinButton.click(),
    ])

    expect(response.status()).toBe(302)
  }

  async verifySignin() {
    await expect(this.profileHeading).toBeVisible()
  }

  async verifyInvalidLogin() {
    await expect(this.pageAlert).toContainText(
      /Incorrect password|Invalid email address|No user found with the given email address/
    )
  }
}
