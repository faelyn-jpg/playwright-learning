import { Locator, Page, expect } from '@playwright/test'

export default class BooksPage {
  page: Page
  baseUrl: string
  bookstorePageHeading: Locator
  bookPrice: Locator
  bookName: Locator
  cartLink: Locator
  addToCartButton: Locator
  cartNotification: Locator
  cartPageHeading: Locator

  constructor(page: Page) {
    this.page = page
    this.baseUrl = 'https://practice.expandtesting.com/bookstore'
    this.bookstorePageHeading = page.getByRole('heading', {
      name: 'Books List',
      level: 1,
    })
    this.bookPrice = page.getByTestId('price-674108466cb6226060a20d44')
    this.bookName = page.getByTestId('title-674108466cb6226060a20d44')
    this.cartLink = page.getByAltText('Cart')
    this.addToCartButton = page.getByTestId('cart-674108466cb6226060a20d44')
    this.cartNotification = page.getByRole('link', { name: 'Cart 1' })
    this.cartPageHeading = page.getByRole('heading', {
      name: 'Books List',
      level: 1,
    })
  }

  async goto() {
    await this.page.goto(`${this.baseUrl}`)
  }

  async verifyPageContent() {
    await expect(this.cartPageHeading).toBeVisible()
  }

  async addToCart() {
    await this.addToCartButton.click()
  }

  async verifyAddedToCart() {
    await expect(this.cartNotification).toContainText('1')
  }
}
