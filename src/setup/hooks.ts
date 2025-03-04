import { Before, After, setDefaultTimeout } from '@cucumber/cucumber'
import { LearningWorld } from './world'

setDefaultTimeout(1_000_000)

Before<LearningWorld>('not @auth', async function () {
  await this.openBrowser()
})

Before<LearningWorld>('@auth', async function () {
  await this.openAuthBrowser()
})

After<LearningWorld>(async function () {
  await this.closeBrowser()
})
