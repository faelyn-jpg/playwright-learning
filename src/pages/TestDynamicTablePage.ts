import { Locator, Page, expect } from '@playwright/test'

export default class TestDynamicTablePage {
  page: Page
  baseUrl: string
  pageHeading: Locator
  pageTable: Locator
  tableHeader: Locator
  tableRows: Locator
  tableCol: Locator

  constructor(page: Page) {
    this.page = page
    this.baseUrl = 'https://practice.expandtesting.com'
    this.pageHeading = page.getByRole('heading', {
      name: 'Dynamic Table page for Automation Testing Practice',
      level: 1,
    })
    this.pageTable = page.getByRole('table', { name: 'table' })
    this.tableHeader = page.locator('thead')
    this.tableRows = page.locator('tbody tr')
    this.tableCol = this.tableRows.first().locator('td')
  }

  async goto() {
    await this.page.goto(`${this.baseUrl}/dynamic-table`)
  }

  async verifyPageContent() {
    await expect(this.pageHeading).toBeVisible({ timeout: 10_000 })
  }

  async verifyCPU(chosenBrowser: string) {
    const selectedBrowser = this.tableRows.filter({
      has: this.page.locator('td'),
      hasText: chosenBrowser,
    })
    const CPU = await selectedBrowser
      .locator('td', { hasText: /%/ })
      .textContent()
    const label = await this.page.getByText(/CPU:/).textContent()
    expect(label).toContain(CPU)
  }
}
