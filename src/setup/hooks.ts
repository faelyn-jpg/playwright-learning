import { Before, After, setDefaultTimeout } from '@cucumber/cucumber'
import { LearningWorld } from './world'

setDefaultTimeout(1_000_000)

Before<LearningWorld>(async function () {
  await this.openBrowser()
})

After<LearningWorld>(async function () {
  await this.closeBrowser()
})
