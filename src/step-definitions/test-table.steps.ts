import { When, Then } from '../setup/world'
import TestDynamicTablePage from 'pages/TestDynamicTablePage'

When(
  'I check value of {string} process CPU load',
  async function (chosenBrowser: string) {
    this.state.chosenBrowser = chosenBrowser
    const testDynamicTablePage = new TestDynamicTablePage(this.page)
    await testDynamicTablePage.goto()
    await testDynamicTablePage.verifyPageContent()
  }
)

Then('It should equal value of CPU in yellow label', async function () {
  const testDynamicTablePage = new TestDynamicTablePage(this.page)
  await testDynamicTablePage.verifyCPU(this.state.chosenBrowser)
})
