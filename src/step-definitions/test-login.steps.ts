import { When, Then } from '../setup/world'
import TestLoginPage from 'pages/TestLoginPage'

When(
  'I log in to the test page with the credentials {string} {string}',
  async function (username: string, password: string) {
    this.state.username = username
    this.state.password = password

    const testLoginPage = new TestLoginPage(this.page)
    await testLoginPage.goto()
    await testLoginPage.verifyPageContent()
    await testLoginPage.login(username, password)
  }
)

Then('I should be logged in', async function () {
  const testLoginPage = new TestLoginPage(this.page)
  await testLoginPage.verifyLogin(this.state.username)
})
