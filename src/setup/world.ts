import {
  World,
  setWorldConstructor,
  When as CucumberWhen,
  Given as CucumberGiven,
  Then as CucumberThen,
} from '@cucumber/cucumber'
import { Browser, Page, chromium, BrowserContext } from '@playwright/test'

export class LearningWorld extends World {
  browser!: Browser
  page!: Page
  context!: BrowserContext
  state: Record<string, any> = {}

  async openBrowser() {
    this.browser = await chromium.launch({
      headless: false,
    })
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()
  }

  async closeBrowser() {
    await this.page.close()
    await this.context.close()
    await this.browser.close()
  }
}

setWorldConstructor(LearningWorld)

export const Given = CucumberGiven<LearningWorld>
export const When = CucumberWhen<LearningWorld>
export const Then = CucumberThen<LearningWorld>
